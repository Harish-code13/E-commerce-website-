package com.shop.service;

import com.shop.exception.OrderException;
import com.shop.model.Address;
import com.shop.model.Order;
import com.shop.model.User;

import java.util.List;

public interface OrderService {

    public Order create(User user, Address shippingAddress);

    public Order findOrderById(Long userId)throws OrderException;

    public List<Order> userOrderHistory(Long userId);

    public Order placeOrder(Long orderId)throws OrderException;

    public Order confirmOrder(Long orderId)throws OrderException;

    public Order shippingOrder(Long orderId)throws OrderException;

    public Order deliveredOrder(Long orderId)throws OrderException;

    public Order cancledOrder(Long orderId)throws OrderException;

    Order cancelledOrder(Long orderId);
}
