package com.shop.controller;


import com.shop.exception.OrderException;
import com.shop.model.Address;
import com.shop.model.Order;
import com.shop.model.User;
import com.shop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/orders")
    public class OrderController {

        private final OrderService orderService;

        @Autowired
        public OrderController(OrderService orderService) {
            this.orderService = orderService;
        }

        //  Create a new order
        @PostMapping("/create")
        public Order createOrder(@RequestBody User user,
                                 @RequestBody Address shippingAddress) {
            return orderService.create(user, shippingAddress);
        }

        // Find order by ID
        @GetMapping("/{orderId}")
        public Order getOrderById(@PathVariable Long orderId) throws OrderException {
            return orderService.findOrderById(orderId);
        }

        // Get user order history
        @GetMapping("/user/{userId}")
        public List<Order> getUserOrders(@PathVariable Long userId) {
            return orderService.userOrderHistory(userId);
        }

        // Place order
        @PutMapping("/{orderId}/place")
        public Order placeOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.placeOrder(orderId);
        }

        // Confirm order
        @PutMapping("/{orderId}/confirm")
        public Order confirmOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.confirmOrder(orderId);
        }

        // Ship order
        @PutMapping("/{orderId}/ship")
        public Order shipOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.shippingOrder(orderId);
        }

        // Deliver order
        @PutMapping("/{orderId}/deliver")
        public Order deliverOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.deliveredOrder(orderId);
        }

        // Cancel order
        @PutMapping("/{orderId}/cancel")
        public Order cancelOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.cancelledOrder(orderId);
        }
    }
