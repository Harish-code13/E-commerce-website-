package com.shop.controller;

import com.shop.exception.CartException;
import com.shop.model.Cart;
import com.shop.model.CartItem;
import com.shop.request.AddToCartRequest;
import com.shop.request.UpdateCartItemRequest;
import com.shop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // Get cart for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<Cart> getUserCart(@PathVariable Long userId) throws CartException {
        Cart cart = cartService.getUserCart(userId);
        return ResponseEntity.ok(cart);
    }

    // Add item to cart
    @PostMapping("/user/{userId}/add")
    public <AddToCartRequest> ResponseEntity<CartItem> addToCart(@PathVariable Long userId,
                                                                 @RequestBody AddToCartRequest request) throws CartException {
        CartItem cartItem = cartService.addToCart(userId, request);
        return ResponseEntity.status(201).body(cartItem);
    }

    // Update item quantity in cart
    @PutMapping("/user/{userId}/update/{itemId}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Long userId,
                                                   @PathVariable Long itemId,
                                                   @RequestBody UpdateCartItemRequest request) throws CartException {
        CartItem updatedItem = cartService.updateCartItem(userId, itemId, request);
        return ResponseEntity.ok(updatedItem);
    }

    // Remove item from cart
    @DeleteMapping("/user/{userId}/remove/{itemId}")
    public ResponseEntity<Void> removeCartItem(@PathVariable Long userId,
                                               @PathVariable Long itemId) throws CartException {
        cartService.removeCartItem(userId, itemId);
        return ResponseEntity.noContent().build();
    }

    // Clear entire cart
    @DeleteMapping("/user/{userId}/clear")
    public ResponseEntity<Void> clearCart(@PathVariable Long userId) throws CartException {
        cartService.clearCart(userId);
        return ResponseEntity.noContent().build();
    }
}
