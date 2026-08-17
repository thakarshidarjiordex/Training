abstract class Vehicle {
    protected brand: string;
    protected speed: number;
    readonly vehicleNumber: string;

    constructor(vehicleNumber: string, brand: string , speed: number) {
        this.vehicleNumber = vehicleNumber;
        this.brand = brand;
        this.speed = speed;
    }

    public showDetails(): void {
        console.log("----------------------");
        console.log(`Vehicle Number : ${this.vehicleNumber}`);
        console.log(`Brand          : ${this.brand}`);
        console.log(`Speed          : ${this.speed} km/h`);
        console.log("----------------------");
    }

    public abstract start(): void;

    public stop(): void {
        console.log(`${this.brand} vehicle stopped.`);
    }
}

class Car extends Vehicle {
    private numberOfDoors: number;

    constructor(vehicleNumber: string , brand: string , speed: number, numberOfDoors: number) {
        super(vehicleNumber, brand, speed);
        this.numberOfDoors = numberOfDoors;
    }

    public start(): void {
        console.log(`${this.brand} Car started with key.`);
    }

    public showCarDetails(): void {
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
}

class Bike extends Vehicle {
    private hasGear: boolean;

    constructor(vehicleNumber: string, brand: string , speed: number , hasGear: boolean) {
        super(vehicleNumber, brand, speed);
        this.hasGear = hasGear;
    }

    public start(): void {
        console.log(`${this.brand} Bike started with self-start.`);
    }

    public showBikeDetails(): void {
        console.log(`Has Gear: ${this.hasGear}`);
    }
}

const car = new Car("GJ01AB1234","Toyota",180,4);
const bike = new Bike("GJ01XY5678","Honda",120,true);

car.showDetails();
car.showCarDetails();
car.start();
car.stop();

bike.showDetails();
bike.showBikeDetails();
bike.start();
bike.stop();