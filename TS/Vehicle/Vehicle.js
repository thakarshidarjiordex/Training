"use strict";
class Vehicle {
    brand;
    speed;
    vehicleNumber;
    constructor(vehicleNumber, brand, speed) {
        this.vehicleNumber = vehicleNumber;
        this.brand = brand;
        this.speed = speed;
    }
    showDetails() {
        console.log("----------------------");
        console.log(`Vehicle Number : ${this.vehicleNumber}`);
        console.log(`Brand          : ${this.brand}`);
        console.log(`Speed          : ${this.speed} km/h`);
        console.log("----------------------");
    }
    stop() {
        console.log(`${this.brand} vehicle stopped.`);
    }
}
class Car extends Vehicle {
    numberOfDoors;
    constructor(vehicleNumber, brand, speed, numberOfDoors) {
        super(vehicleNumber, brand, speed);
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        console.log(`${this.brand} Car started with key.`);
    }
    showCarDetails() {
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
}
class Bike extends Vehicle {
    hasGear;
    constructor(vehicleNumber, brand, speed, hasGear) {
        super(vehicleNumber, brand, speed);
        this.hasGear = hasGear;
    }
    start() {
        console.log(`${this.brand} Bike started with self-start.`);
    }
    showBikeDetails() {
        console.log(`Has Gear: ${this.hasGear}`);
    }
}
const car = new Car("GJ01AB1234", "Toyota", 180, 4);
const bike = new Bike("GJ01XY5678", "Honda", 120, true);
car.showDetails();
car.showCarDetails();
car.start();
car.stop();
bike.showDetails();
bike.showBikeDetails();
bike.start();
bike.stop();
