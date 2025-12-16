package com.shop.service;

import com.shop.exception.ProductException;
import com.shop.model.Category;
import com.shop.model.Product;
import com.shop.repository.CategoryRepository;
import com.shop.repository.ProductRepository;
import com.shop.repository.UserRepository;
import com.shop.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImplementation implements ProductService {
    private ProductRepository productRepository;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;

    public ProductServiceImplementation(ProductRepository productRepository,
                                        UserRepository userRepository,
                                        CategoryRepository categoryRepository){
        this.productRepository=productRepository;
        this.userRepository=userRepository;
        this.categoryRepository=categoryRepository;
    }
    @Override
    public Product createProduct(CreateProductRequest req) {

        Category topLevel=categoryRepository.findByName(req.getTopLavelCategory());

        if (topLevel==null){
            Category topLavelCategory=new Category();
            topLavelCategory.setName(req.getTopLavelCategory());
            topLavelCategory.setLevel(1);

            topLevel=categoryRepository.save(topLavelCategory);
        }
        Category secondLevel=categoryRepository.findByNameAndParant(req.getSecondLavelCategory(),topLevel.getName());

        if (secondLevel==null){
            Category secondLavelCategory=new Category();
            secondLavelCategory.setName(req.getSecondLavelCategory());
            secondLavelCategory.setParentCategory(topLevel);
            secondLavelCategory.setLevel(2);

            secondLevel=categoryRepository.save(secondLavelCategory);
        }
        Category thirdLevel=categoryRepository.findByNameAndParant(req.getSecondLavelCategory(),secondLevel.getName());

        if (thirdLevel==null){
            Category thirdLavelCategory=new Category();
            thirdLavelCategory.setName(req.getThirdLavelCategory());
            thirdLavelCategory.setParentCategory(secondLevel);
            thirdLavelCategory.setLevel(3);

            thirdLevel=categoryRepository.save(thirdLavelCategory);
        }
       


        return null;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        return "";
    }

    @Override
    public Product updateProduct(Long ProductId, Product product) throws ProductException {
        return null;
    }

    @Override
    public Product findprductById(Long id) throws ProductException {
        return null;
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
        return null;
    }
}
