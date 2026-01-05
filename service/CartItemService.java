package com.shop.service;

import com.shop.exception.CartItemException;
import com.shop.exception.UserException;
import com.shop.model.Cart;
import com.shop.model.CartItem;
import com.shop.model.Product;
import org.springframework.stereotype.Service;

public interface CartItemService {

    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);


    public abstract CartItem isCartItemExist(Cart cart, Product product, Service size, Long userId);

    public void removeCartItem(Long userId, Long cartItemId)throws CartItemException, UserException;

    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
