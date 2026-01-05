package com.shop.service;

import com.shop.exception.ProductException;
import com.shop.model.Product;
import com.shop.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long productId)throws ProductException;

    public Product updateProduct(Long ProductId, Product req)throws  ProductException;

    public Product findproductById(Long id)throws ProductException;

    public List<Product> findProductByCategory(String category);

    public Page<Product> getAllProduct(String category,List<String>colors,List<String>sizes,Integer minPrice, Integer maxPrice,
                                       Integer minDiscount, String sort,String stock,Integer pageNumber,Integer pageSize);

    List<Product> searchProduct(String q);
}
