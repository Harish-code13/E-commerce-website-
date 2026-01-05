package com.shop.service;

import com.shop.exception.OrderException;
import com.shop.model.*;
import com.shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService {

    private final CartRepository cartRepository;
    private final CartService cartItemService;
    private final ProductService productService;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final OrderItemRepository orderItemRepository;
    private final OrderItemService orderItemService;
    private final OrderRepository orderRepository; // ✅ Added

    public OrderServiceImplementation(CartRepository cartRepository, CartService cartItemService,
                                      ProductService productService, AddressRepository addressRepository,
                                      UserRepository userRepository, OrderItemRepository orderItemRepository,
                                      OrderItemService orderItemService, OrderRepository orderRepository) {
        this.cartItemService = cartItemService;
        this.cartRepository = cartRepository;
        this.productService = productService;
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
        this.orderItemRepository = orderItemRepository;
        this.orderItemService = orderItemService;
        this.orderRepository = orderRepository;
    }

    @Override
    public Order create(User user, Address shippingAddress) {
        // Save address and link to user
        shippingAddress.setUser(user);
        Address savedAddress = addressRepository.save(shippingAddress);
        user.getAddress().add(savedAddress);
        userRepository.save(user);

        // Get user cart
        Cart cart = cartItemService.findUserCart(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem item : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setPrice(item.getPrice());
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setSize(item.getSize());
            orderItem.setUserId(item.getUserId());
            orderItem.setDiscountedPrice(item.getDiscountedPrice());

            OrderItem createdOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(createdOrderItem);
        }

        // Create order
        Order createdOrder = new Order();
        createdOrder.setUser(user);
        createdOrder.setOrderItems(orderItems);
        createdOrder.setTotalPrice(cart.getTotalPrice());
        createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
        createdOrder.setDiscounted(cart.getDiscounted());
        createdOrder.setTotalItem(cart.getTotalItem());
        createdOrder.setShippingAddress(savedAddress);
        createdOrder.setOrderDate(LocalDateTime.now());
        createdOrder.setOrderStatus("CREATED");

        return orderRepository.save(createdOrder);
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new OrderException("Order not found with id: " + orderId));
    }

    @Override
    public List<Order> userOrderHistory(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public Order placeOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("PLACED");
        order.getPaymentDetails().setStatus("COMPLETED");
        return orderRepository.save(order);
    }

    @Override
    public Order confirmOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("CONFIRMED");
        return orderRepository.save(order);
    }

    @Override
    public Order shippingOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("SHIPPED");
        return orderRepository.save(order);
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("DELIVERED");
        return orderRepository.save(order);
    }

    @Override
    public Order cancledOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order cancelledOrder(Long orderId) {
        return null;
    }


    @RestController
    @RequestMapping("/orders")
    public class OrderController {

        private final OrderService orderService;

        @Autowired
        public OrderController(OrderService orderService) {
            this.orderService = orderService;
        }

        // Cancel order endpoint
        @PutMapping("/{orderId}/cancel")
        public Order cancelOrder(@PathVariable Long orderId) throws OrderException {
            return orderService.cancelledOrder(orderId);
        }
    }
}