package com.shop.request;

import com.shop.exception.ProductException;
import com.shop.model.Rating;
import com.shop.model.User;

import java.util.List;

public interface RatingRequest {
    public Rating createRating(RatingRequest req, User user)throws ProductException;

    public List<Rating> getProductsRating(Long productId);

    Long getProductsId();

    double getRating();
}
