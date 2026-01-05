package com.shop.service;

import com.shop.exception.ProductException;
import com.shop.model.Product;
import com.shop.model.Rating;
import com.shop.model.User;
import com.shop.repository.RatingRepository;
import com.shop.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService{

    private RatingRepository ratingRepository;
    private ProductService productService;

    public RatingServiceImplementation(RatingRepository ratingRepository,
                                       ProductService productService){
        this.ratingRepository=ratingRepository;
        this.productService=productService;

    }

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product producd=productService.findproductById(req.getProductsId());
        Rating rating=new Rating();
        rating.setProduct(producd);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());
        return ratingRepository.save(rating);
    }
    @Override
    public List<Rating> getProductsRating(Long productId){
        return ratingRepository.getAllProductsRating(productId);
    }
}
