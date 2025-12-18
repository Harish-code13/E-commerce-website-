package com.shop.repository;

import com.shop.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public  Category findbyName(String name);

    Category findByName(String topLavelCategory);
    @Query("Select from Category c Where c.name=:name And c.parentCategory.name=:parentCategoryName")
    public  Category findByNameAndParant(@Param("name")String name,@Param("parantCategoryName")String parentCategoryName);
}
