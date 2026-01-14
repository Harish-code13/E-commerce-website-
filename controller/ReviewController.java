package com.shop.controller;

import com.shop.exception.ReviewException;
import com.shop.model.Review;
import com.shop.request.CreateReviewRequest;
import com.shop.request.UpdateReviewRequest;
import com.shop.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing product reviews.
 */
@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // Create a new review for a product
    @PostMapping("/product/{productId}/user/{userId}")
    public ResponseEntity<Review> createReview(@PathVariable Long productId,
                                               @PathVariable Long userId,
                                               @RequestBody CreateReviewRequest request) throws ReviewException {
        Review review = reviewService.createReview(productId, userId, request);
        return ResponseEntity.status(201).body(review);
    }

    // Get all reviews for a product
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductReviews(@PathVariable Long productId) {
        List<Review> reviews = reviewService.getReviewsByProduct(productId);
        return ResponseEntity.ok(reviews);
    }

    // Get a specific review by ID
    @GetMapping("/{reviewId}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long reviewId) throws ReviewException {
        Review review = reviewService.getReviewById(reviewId);
        return ResponseEntity.ok(review);
    }

    // Update a review
    @PutMapping("/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId,
                                               @RequestBody UpdateReviewRequest request) throws ReviewException {
        Review updatedReview = reviewService.updateReview(reviewId, request);
        return ResponseEntity.ok(updatedReview);
    }

    // Delete a review
    @DeleteMapping("/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long reviewId) throws ReviewException {
        reviewService.deleteReview(reviewId);
        return ResponseEntity.noContent().build();
    }
}
