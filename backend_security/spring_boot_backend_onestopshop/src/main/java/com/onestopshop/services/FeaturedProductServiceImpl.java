package com.onestopshop.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.daos.FeaturedProductRepository;
import com.onestopshop.dtos.ApiResponse;
import com.onestopshop.dtos.FeaturedProductDTO;
import com.onestopshop.entities.FeaturedProduct;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class FeaturedProductServiceImpl implements FeaturedProductService {

	@Autowired
	FeaturedProductRepository featuredProductRepository;

	@Autowired
	ModelMapper modelMapper;

//	private final String PATH = "src\\main\\resources\\static\\Images\\FeaturedProducts\\";
	private final String PATH = "C:\\OneStopShop\\Images\\FeaturedProducts\\";
	
	public FeaturedProductServiceImpl() {
		File directory = new File(PATH);
		if (!directory.exists()) {
			directory.mkdirs();
		}
	}

	@Override
	public ApiResponse addFeaturedProduct(MultipartFile file, FeaturedProductDTO featuredProductDto)
			throws IOException {
		String filePath = PATH + file.getOriginalFilename();
		try {
		// Save the file locally
		file.transferTo(new File(filePath));

		// Map the DTO to the entity
		FeaturedProduct featuredProduct = modelMapper.map(featuredProductDto, FeaturedProduct.class);
		featuredProduct.setFilePath(filePath);
		featuredProduct.setFileName(file.getOriginalFilename());

		// Save the entity in the repository
		featuredProductRepository.save(featuredProduct);
		return new ApiResponse("File Uploaded successfully!!");
		}catch(Exception e){
			return new ApiResponse(e.getMessage());
		}
	}

	@Override
	public byte[] getFeaturedProduct(String fileName) throws IOException {
		FeaturedProduct featuredProduct = featuredProductRepository.findByFileName(fileName);
		return Files.readAllBytes(new File(featuredProduct.getFilePath()).toPath());
	}
	
	@Override
	public List<FeaturedProduct> getAllFeaturedProducts() throws IOException{
		return featuredProductRepository.findAll();
	}

	@Override
	public FeaturedProduct deleteFeaturedProduct(Long id) {
		FeaturedProduct featuredProduct=featuredProductRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid Featured product ID..."));
		featuredProductRepository.deleteById(id);
		return featuredProduct;
	}
	

}
