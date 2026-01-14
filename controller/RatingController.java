package com.shop.controller;

import com.shop.exception.RatingException;
import com.shop.model.Rating;
import com.shop.request.CreateRatingRequest;
import com.shop.request.UpdateRatingRequest;
import com.shop.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing product ratings.
 */
@RestController
@RequestMapping("/ratings")
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    // Create a new rating for a product
    @PostMapping("/product/{productId}/user/{userId}")
    public ResponseEntity<Rating> createRating(@PathVariable Long productId,
                                               @PathVariable Long userId,
                                               @RequestBody CreateRatingRequest request) throws RatingException {
        Rating rating = ratingService.createRating(productId, userId, request);
        return ResponseEntity.status(201).body(rating);
    }

    // Get all ratings for a product
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductRatings(@PathVariable Long productId) {
        List<Rating> ratings = ratingService.getRatingsByProduct(productId);
        return ResponseEntity.ok(ratings);
    }

    // Get rating by ID
    @GetMapping("/{ratingId}")
    public ResponseEntity<Rating> getRatingById(@PathVariable Long ratingId) throws RatingException {
        Rating rating = ratingService.getRatingById(ratingId);
        return ResponseEntity.ok(rating);
    }

    // Update rating
    @PutMapping("/{ratingId}")
    public ResponseEntity<Rating> updateRating(@PathVariable Long ratingId,
                                               @RequestBody UpdateRatingRequest request) throws RatingException {
        Rating updatedRating = ratingService.updateRating(ratingId, request);
        return ResponseEntity.ok(updatedRating);
    }

    // Delete rating
    @DeleteMapping("/{ratingId}")
    public ResponseEntity<Void> deleteRating(@PathVariable Long ratingId) throws RatingException {
        ratingService.deleteRating(ratingId);
        return ResponseEntity.noContent().build();
    }
}
