package com.shop.repository;

import com.shop.model.Order;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o From Order o where o.user.id=:userId AND " +
            "(o.orderStatus='PLACED' OR o.orderStatus='CONFIRMED' OR" +
            " o.orderStatus = 'CONFIRMED' OR o.orderStatus='SHIPPED' OR o.orderStatus='DELIVERED')")
    public List<Order>getUsersOrders(@Param("userId")Long userId);

    List<Order> findByUserId(Long userId);
}