// (1).

/**
Make proper updates in previous of generating Rectangle objects,
 Rectangle Constructor should inherit from Shape Constructor
 Create your Square constructor that inherits from Rectangle.
 Create a Class Property that counts number of generated Square objects.
 Prevent creating any object from shape, allow creation of only rectangles and square (make shape abstract class)
 All of the properties should be defined using accessor and/or data descriptor, prevent them from being deleted, iterated or being modified.
 Use .toString() to display each instance’s dimensions, its area and perimeter.
 Implement .valueof() so that if there is more than one rectangle object we can run arithmetic operation as follows
: if we have rectangle1 of area 60m2 and rectangle2 of 37m2 then rectangle1 + rectangle2 should return 97 and rectangle1 - rectangle2 should return 23.
 you can add any property you need.
1. b Bonus: allow creation of only one square and one rectangle
 */

function Shape() {
  if (this.constructor == Shape) {
    throw Error("Cannot instantiate an instance for the Abstract Shape Class");
  }
}
function Rectangle(width, height) {
  Shape.call(this);

  if (Rectangle.instance && this.constructor == Rectangle) {
    throw Error("Cannot create more than 1 instance from the Rectangle Class");
  }

  Object.defineProperties(this, {
    height: {
      value: height,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    width: {
      value: width,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });

  Rectangle.instance = this;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.valueOf = function () {
  return this.area();
};

Rectangle.prototype.toString = function () {
  return (
    "Width: " +
    this.width +
    "\nHeight: " +
    this.height +
    "\nPerimeter: " +
    this.perimeter() +
    "\nArea: " +
    this.area()
  );
};

function Square(side) {
  if (Square.count >= 1) {
    throw Error("Cannot create more than 1 instance from the Square Class");
  }
  Rectangle.call(this, side, side);
  Square.count++;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.count = 0;

let r1 = new Rectangle(5, 8);
let s1 = new Square(5);

console.log(r1.toString());
console.log("Arithmetic (r1 + s1): " + (r1 + s1)); // 65
console.log("Arithmetic (r1 - s1): " + (r1 - s1)); // 15
