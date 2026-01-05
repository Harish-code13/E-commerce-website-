package com.shop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String review;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product Product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime createdAt;

    public Review(){

    }

    public Review(String review, Product product, User user, LocalDateTime createdAt, Long id) {
        
    }

    public void setUser(User user) {
    }

    public void setProduct(Product product) {
    }

    public void setReview(String review) {
    }

    public void setCreatedAt(LocalDateTime now) {

    }
}
