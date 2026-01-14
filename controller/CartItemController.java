package com.shop.controller;

import com.shop.exception.CartException;
import com.shop.model.CartItem;
import com.shop.request.AddToCartRequest;
import com.shop.request.UpdateCartItemRequest;
import com.shop.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing cart items.
 */
@RestController
@RequestMapping("/cart/items")
public class CartItemController {

    private final CartItemService cartItemService;

    @Autowired
    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    // Get all items in a user's cart
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CartItem>> getUserCartItems(@PathVariable Long userId) throws CartException {
        List<CartItem> items = cartItemService.getUserCartItems(userId);
        return ResponseEntity.ok(items);
    }

    // Get a specific cart item by ID
    @GetMapping("/{itemId}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long itemId) throws CartException {
        CartItem item = cartItemService.getCartItemById(itemId);
        return ResponseEntity.ok(item);
    }

    // Add item to cart
    @PostMapping("/user/{userId}/add")
    public ResponseEntity<CartItem> addCartItem(@PathVariable Long userId,
                                                @RequestBody AddToCartRequest request) throws CartException {
        CartItem item = cartItemService.addCartItem(userId, request);
        return ResponseEntity.status(201).body(item);
    }

    // Update cart item quantity
    @PutMapping("/{itemId}/update")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Long itemId,
                                                   @RequestBody UpdateCartItemRequest request) throws CartException {
        CartItem updatedItem = cartItemService.updateCartItem(itemId, request);
        return ResponseEntity.ok(updatedItem);
    }

    // Remove cart item
    @DeleteMapping("/{itemId}/remove")
    public ResponseEntity<Void> removeCartItem(@PathVariable Long itemId) throws CartException {
        cartItemService.removeCartItem(itemId);
        return ResponseEntity.noContent().build();
    }
}
