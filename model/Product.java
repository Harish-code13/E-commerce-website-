package com.shop.model;

import jakarta.persistence.*;
import jdk.jfr.Category;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String title;


    private String description;


    private int price;

    @Column(name = "discount_price")
    private int discountPrice;

    @Column(name = "discount_Persent")
    private int discountPresent;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "brand")
    private String brand;

    @Column(name = "color")
    private String color;

    @Embedded
    @ElementCollection
    @Column(name = "sizes")
    private Set<Size> sizes=new HashSet<>();

    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Rating>ratings=new ArrayList<>();

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Review>Reviews=new ArrayList<>();

    @Column(name = "num_ration")
    private int numRatings;

    @ManyToOne()
    @JoinColumn(name = "categaory_id")
    private Category category;

    private LocalDateTime createdAt;


}
