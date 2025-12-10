package com.shop.controller;

import com.shop.JwtProvider;
import com.shop.exception.UserException;
import com.shop.model.User;
import com.shop.repository.UserRepository;
import com.shop.request.LoginRequest;
import com.shop.response.AuthResponse;
import com.shop.service.CustomerUserServiceImplimentation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository UserRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomerUserServiceImplimentation customerUserServiceImplimentation;

    public AuthController(UserRepository userRepository,
                          CustomerUserServiceImplimentation customerUserServiceImplimentation,
                          PasswordEncoder passwordEncoder){
        this.UserRepository=userRepository;
        this.customerUserServiceImplimentation=customerUserServiceImplimentation;
        this.passwordEncoder=passwordEncoder;
    }
    @PostMapping("/Signup")
    public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user)throws UserException{

        String email= user.getEmail();
        String password= user.getPassword();
        String firstName= user.getFirstName();
        String lastName= user.getLastname();

        User isEmailExist= UserRepository.findByEmail(email);

        if(isEmailExist!=null){
            throw new UserException("Email Is Already Used with Another Account");
        }
        User createdUser=new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastname(lastName);

        User savedUser=UserRepository.save(createdUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=jwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse(token,"Signup Success");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    }
    @PostMapping("/signin")
    public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest){
        String username=loginRequest.getEmail();
        String password=loginRequest.getPassword();

        Authentication authentication=authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=jwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse(token,"Signin Success");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails= customerUserServiceImplimentation.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("Invalid Username");
        }
        if (!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password...");
        }
        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }
}
