package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.Specification;

public interface SpecificationRepository extends JpaRepository<Specification, Long> {

}
