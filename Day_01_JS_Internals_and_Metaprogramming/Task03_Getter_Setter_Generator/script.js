// (2).

/**
 * Create your own custom object that has getSetGen as a function value,
 * this function should generate setters and getters for the properties of the caller object
 * This object may have a description property of string value if needed
 * Let any other created object can use this function property to generate getters and setters for its own properties
 * Avoid generating getters or setters for any property of function value
 * Hint:
 * if getSetGen() is applied on any other object it should generate getters and setters for all of the applied object properties
 * i.e. if you have the following object:
 * obj = {
 *    id:”SD-10”,
 *    location:”SV”,
 *    addr:”123 st.”, getSetGen:
 *    function(){*should be implemented*}
 * }
/**
 * using of getSetGen() will generate the following getId(), setId(), getLocation(), setLocation(), getAddr(), setAddr().
 * If you created the following object var user = { name: ”Ali”, age:10}
 * When applying getSetGen() on the user object (you can use call or bind or apply),
 * it will result in creating the following: getName(), getAge(),setName(),setAge().
 */

let customObject = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    var self = this;
    for (var key in self) {
      if (typeof self[key] !== "function" && self.hasOwnProperty(key)) {
        (function (property) {
          let propertyCapitalizedName = property[0].toUpperCase() + property.slice(1);
          self["get" + propertyCapitalizedName] = function () {
            return self[property];
          };
          self["set" + propertyCapitalizedName] = function (value) {
            self[property] = value;
          };
        })(key);
      }
    }
  },
};

customObject.getSetGen();
console.log(customObject)
customObject.setLocation("Ca");
console.log(customObject.getLocation());

var user = {
  name: "Ali",
  age: 10
};

customObject.getSetGen.call(user);

console.log(user.getName());
user.setAge(11);
console.log(user.getAge());