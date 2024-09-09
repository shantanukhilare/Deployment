package com.onestopshop.dtos;

import lombok.Data;

@Data
public class SpecificationDTO {
    private String cpuManufacturer;
    private String cpuModel;
    private Integer cores;
    private Integer threads;
    private Double speed;

    private String gpuManufacturer;
    private String gpuModel;

    private String size;
    private String resolution;
    private Integer refreshRate;
    private Boolean touchScreen;

    private String description;

    private String ramSize;
    private String ramType;
    private String storageSize;
    private String storageType;
    private String color;
    private String os;
    private String wifi;
    private String bluetooth;
    private Double weight;
    private String dimensions;
    private Boolean ethernetPort;
    private Integer usbPorts;
    private Integer hdmiPorts;
    private String webcam;
    private String speakers;
    private String battery;
    private String warranty;
    private Boolean sevenDayReplacement;
    private Boolean freeDelivery;
    private Boolean trustedSupplier;
}
