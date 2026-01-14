package com.shop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for handling home and general endpoints.
 */
@RestController
@RequestMapping("/home")
public class HomeController {

    // Welcome endpoint
    @GetMapping
    public ResponseEntity<String> welcome() {
        return ResponseEntity.ok("Welcome to the Shop API!");
    }

    // About endpoint
    @GetMapping("/about")
    public ResponseEntity<String> about() {
        return ResponseEntity.ok("This is the Shop API, providing product, order, and cart management.");
    }

    // Health check endpoint
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Shop API is running fine!");
    }
}