package com.ssafy.edu.repository;


import com.ssafy.edu.model.TestDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TestRepository extends JpaRepository<TestDate, Integer> {
    public Optional<TestDate> findById(Integer pk);
}
