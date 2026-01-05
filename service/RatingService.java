package com.shop.service;

import com.shop.exception.ProductException;
import com.shop.model.Rating;
import com.shop.model.User;
import com.shop.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;


public interface RatingService {
    public Rating createRating(RatingRequest req, User user)throws ProductException;

    public List<Rating> getProductsRating (Long productId);
}
