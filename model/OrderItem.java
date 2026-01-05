package com.shop.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Order order;

    @ManyToOne
    private Product product;

    private String size;

    private int quantity;

    private Integer Price;

    private Integer discountedPrice;

    private Long userId;

    private LocalDateTime deliverDate;

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer price) {
        Price = price;
    }

    public Integer getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(Integer discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getDeliverDate() {
        return deliverDate;
    }

    public void setDeliverDate(LocalDateTime deliverDate) {
        this.deliverDate = deliverDate;
    }

    public OrderItem(Order order, Product product, String size,
                     int quantity, Integer price, Integer discountedPrice,
                     Long userId, LocalDateTime deliverDate) {
        this.order = order;
        this.product = product;
        this.size = size;
        this.quantity = quantity;
        Price = price;
        this.discountedPrice = discountedPrice;
        this.userId = userId;
        this.deliverDate = deliverDate;
    }

    public OrderItem(){

    }

    public <orderItem> void add(orderItem createdOrderItem) {

    }
}
