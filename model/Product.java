package com.shop.model;

import jakarta.persistence.*;
import jdk.jfr.Category;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalDateTime;
import java.util.*;

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

    public static Collection<Object> getSizes() {
        return List.of();
    }
    


    public void setTitle(String title) {
    }

    public void setColor(String color) {
    }

    public void setDescription(String description) {
    }

    public void setDiscountPrice(int discountPrice) {
    }

    public void setDiscountPersent(int discountPersent) {
    }

    public void setImageUrl(String imageUrl) {
    }

    public void setBrand(String brand) {
    }

    public void setPrice(int price) {
    }

    public void setSizes(Set<Size> sizes) {
    }

    public void setQuantity(int quantity) {
    }

    public void setCategory(com.shop.model.Category thirdLevel) {
    }

    public void setCreated(LocalDateTime now) {
    }

    public int getQuantity() {
        return 0;
    }

    public String getColor() {
        return "";
    }

    public Integer getPrice() {
        return null;
    }
    public Integer getDiscountedPrice(){
        return null;
    }
}
