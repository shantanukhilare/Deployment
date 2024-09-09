package com.onestopshop.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "specifications")
public class Specification extends BaseEntity {
    
    private String cpuManufacturer;
    private String cpuModel;
    private Integer cores;
    private Integer threads;
    private Double speed; // In GHz


    private String gpuManufacturer;
    private String gpuModel;

    
    private String size; // E.g., 17.3 inches
    private String resolution; // E.g., 2560 x 1440
    private Integer refreshRate; // In Hz
    private Boolean touchScreen;

	@Column(name = "description")
	private String description;
    
    private String ramSize;
    private String ramType;
    private String storageSize;
    private String storageType;
    private String color;
    private String os;
    private String wifi;
    private String bluetooth;
    private Double weight; // In kilograms
    private String dimensions; // In millimeters
    private Boolean ethernetPort;
    private Integer usbPorts;
    private Integer hdmiPorts;
    private String webcam; // E.g., 720p HD
    private String speakers; // E.g., Stereo
    private String battery; // E.g., 56Wh
    private String warranty; // E.g., 1 year
    private Boolean sevenDayReplacement;
    private Boolean freeDelivery;
    private Boolean trustedSupplier;


}
