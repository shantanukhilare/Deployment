package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.Product;
import com.onestopshop.entities.ProductImage;
import java.util.List;




public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
	ProductImage findByFileName(String fileName);
	ProductImage findByProductAndCover(Product product, boolean cover);
	List<ProductImage> findByProduct(Product product);
}
