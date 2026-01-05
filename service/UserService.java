package com.shop.service;

import com.shop.exception.UserException;
import com.shop.model.User;

public interface UserService {
    User findUserById(Long userId) throws UserException;
}
