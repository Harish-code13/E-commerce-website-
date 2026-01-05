package com.shop.controller;

import com.shop.exception.OrderException;
import com.shop.model.Order;
import com.shop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/admin/orders")
    public class AdminOrderController {

        private final OrderService orderService;

        @Autowired
        public AdminOrderController(OrderService orderService) {
            this.orderService = orderService;
        }

        // Get all orders for a specific user
        @GetMapping("/user/{userId}")
        public ResponseEntity<List<Order>> getUserOrders(@PathVariable Long userId) {
            List<Order> orders = orderService.userOrderHistory(userId);
            return ResponseEntity.ok(orders);
        }

        //  Get order by ID
        @GetMapping("/{orderId}")
        public ResponseEntity<Order> getOrderById(@PathVariable Long orderId) throws OrderException {
            Order order = orderService.findOrderById(orderId);
            return ResponseEntity.ok(order);
        }

        // Confirm order
        @PutMapping("/{orderId}/confirm")
        public ResponseEntity<Order> confirmOrder(@PathVariable Long orderId) throws OrderException {
            Order order = orderService.confirmOrder(orderId);
            return ResponseEntity.ok(order);
        }

        // Ship order
        @PutMapping("/{orderId}/ship")
        public ResponseEntity<Order> shipOrder(@PathVariable Long orderId) throws OrderException {
            Order order = orderService.shippingOrder(orderId);
            return ResponseEntity.ok(order);
        }

        // Deliver order
        @PutMapping("/{orderId}/deliver")
        public ResponseEntity<Order> deliverOrder(@PathVariable Long orderId) throws OrderException {
            Order order = orderService.deliveredOrder(orderId);
            return ResponseEntity.ok(order);
        }

        // Cancel order
        @PutMapping("/{orderId}/cancel")
        public ResponseEntity<Order> cancelOrder(@PathVariable Long orderId) throws OrderException {
            Order order = orderService.cancelledOrder(orderId);
            return ResponseEntity.ok(order);
        }
    }

