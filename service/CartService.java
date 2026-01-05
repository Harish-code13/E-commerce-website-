package com.shop.service;

import com.shop.exception.ProductException;
import com.shop.model.Cart;
import com.shop.model.User;
import com.shop.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req)throws ProductException;

    public Cart findUserCart(Long userId);
}
