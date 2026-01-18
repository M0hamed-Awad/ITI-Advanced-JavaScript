// (2).

/**
each class should have the following
o public and private properties and method;
o You should ensure that properties are set with the required data type state in the above diagram otherwise throw an exception.
o All of the properties should be defined using accessor and/or data descriptor, prevent them from being deleted, iterated or being modified.
o Override both .toString() and valueOf()
o Make sure you are implementing inheritance properly.
o You can add any property you need.
 */

function Vehicle(speed, color) {
  if (isNaN(speed)) {
    throw Error("Invalid speed value");
  }
  if (isNaN(color)) {
    throw Error("Invalid color value");
  }
  Object.defineProperties(this, {
    speed: {
      value: speed,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    color: {
      value: color,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}

Vehicle.prototype.toString = function () {
  return "Vehicle - Speed: " + this.speed + ", Color: " + this.color;
};

Vehicle.prototype.valueOf = function () {
  return this.speed;
};

Vehicle.prototype.turnLeft = function () {
  console.log("Turn Left");
};

Vehicle.prototype.turnRight = function () {
  console.log("Turn Right");
};

Vehicle.prototype.start = function () {
  console.log("Start");
  return true;
};

Vehicle.prototype.stop = function () {
  console.log("Stop");
  return true;
};

Vehicle.prototype.goBackward = function (speed, accel) {
  console.log("Go Backward");
};

Vehicle.prototype.goForward = function (speed, accel) {
  console.log("Go Forward");
};

function Bicycle() {
  Vehicle.call(this);
  this.ringBell = function () {
    console.log("Ring Ring");
  };
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function MotorVehicle(speed, color, sizeOfEngine, licenseNumber) {
  Vehicle.call(this, speed, color);
  Object.defineProperties(this, {
    sizeOfEngine: {
      value: sizeOfEngine,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    licenseNumber: {
      value: licenseNumber,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function () {
  return this.sizeOfEngine;
};

MotorVehicle.prototype.getLicenseNumber = function () {
  return this.licenseNumber;
};

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licenseNumber,
  loadCapacity,
  numOfWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licenseNumber);
  Object.defineProperties(this, {
    loadCapacity: {
      value: loadCapacity,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    numOfWheels: {
      value: numOfWheels,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    weight: {
      value: weight,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });

  this.lowerLoad = function () {
    console.log("Lowering Load");
  };

  this.raiseLoad = function () {
    console.log("Raising Load");
  };
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

function Car(
  numOfDoors,
  numOfWheels,
  weight,
  speed,
  color,
  sizeOfEngine,
  licenseNumber
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licenseNumber);
  Object.defineProperties(this, {
    numOfDoors: {
      value: numOfDoors,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    numOfWheels: {
      value: numOfWheels,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    weight: {
      value: weight,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });

  this.switchOnAirConditioner = function () {
    console.log("Air Conditioner is On");
  };

  this.getNumberOfDoors = function () {
    return this.numOfDoors;
  };
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

let myCar = new Car(4, 4, 1500, 120, 156461655, "V8", "Verna");
console.log(myCar.toString());
console.log(myCar + 10);

myCar.speed = 150;
console.log(myCar.speed);
delete myCar.speed;
console.log(myCar);
