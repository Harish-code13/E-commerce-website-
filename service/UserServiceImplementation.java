package com.shop.service;

import com.shop.JwtProvider;
import com.shop.exception.UserException;
import com.shop.model.User;
import com.shop.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }


        public User findUserById (Long usedId) throws UserException {

            Long userId = 0L;
            Optional<User>user=userRepository.findById(userId);
            if (user.isPresent()){
                return user.get();
            }
            throw new UserException("user not fount with id:"+ userId);
        }


        public User findUserProfileByJwt (String jwt)throws UserException {
        String email=jwtProvider.getEmailFromTOken(jwt);

        User user=userRepository.findByEmail(email);
        if (user == null){
            throw new UserException("user not fount with email"+ email);
        }
            return user;
        }
}

