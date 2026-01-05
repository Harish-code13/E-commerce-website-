package com.shop.repository;

import com.shop.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartRepository extends JpaRepository {

    @Query("SELECT c From Cart c Where c.user.id=:userId")
    public Cart findBYUserId(@Param("userId")Long userId);

    Cart findByUserId(Long userId);
}
