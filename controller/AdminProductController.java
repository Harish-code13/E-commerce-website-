package com.shop.controller;

import com.shop.exception.ProductException;
import com.shop.model.Product;
import com.shop.request.CreateProductRequest;
import com.shop.service.ProductService;
import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/product")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product>createProduct(@RequestBody CreateProductRequest req){

        Product product=productService,createProduct (req);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);

    }
    @DeleteMapping("/{product}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId)throws ProductException{
        productService.deleteProduct(productId);
        ApiResponse res = new ApiResponse();
        res.setMessage("product deleted successfully");
        res.setStatus(true);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }
    @GetMapping(".all")
    public ResponseEntity<List<Product>>findAllProduct(){
        List<Product>products=productService.findAllProduct();
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PutMapping("/{product}/update")
    public ResponseEntity<Product>updateProduct(@RequestBody Product req,@PathVariable Long productId)throws ProductException{
        Product product=productService.updateProduct(product,HttpStatus.CREATED);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse>createMultipleProduct@RequestBody CreateProductRequest[]req){
    for(CreateProductRequest product:req){
        productService.createProduct(product);
    }
    ApiResponse res=new ApiResponse();
    res.setMessage("product deleted successfully");
    res.setStatus(true);

    return new ResponseEntity<>(res,HttpStatus.CREATED);
    }
}
