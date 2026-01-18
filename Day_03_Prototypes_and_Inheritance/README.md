# 🧬 Day 03 - Prototypes, Inheritance & Property Control

### Objectives
* **Abstract Classes:** Implement "Abstract" constructors that prevent direct instantiation, serving only as blueprints.
* **Prototypal Inheritance:** Establish deep inheritance chains using `Object.create()` and constructor stealing via `.call()`.
* **Property Descriptors:** Use `Object.defineProperties` to control metadata (writable, configurable, enumerable) for high data integrity.
* **The Singleton Pattern:** Implement logic to restrict a class to only one (or a specific count) of instances.
* **Operator Overloading (via valueOf):** Customize object behavior for arithmetic operations by overriding the internal `valueOf()` method.

---

### 📄 Lab Modules

#### 📐 Module 1: Shapes & Geometry Hierarchy
Implemented a strict hierarchy where `Shape` acts as an abstract base.
* **Abstract Logic:** The `Shape` constructor throws an error if called directly, forcing the use of child classes.
* **Singleton Logic:** Both `Rectangle` and `Square` are constrained to a single instance each, simulating a restricted resource pattern.
* **Descriptor Control:** Dimensions are set as non-writable and non-configurable, preventing deletion or modification after creation.
* **Arithmetic Integration:** Overriding `valueOf` returns the area, allowing rectangles and squares to be added or subtracted directly (e.g., `rect1 + sq1`).



#### 🏎️ Module 2: Vehicle System (Deep Chaining)
A complex simulation of a vehicle fleet using deep prototype chaining.
* **The Chain:** `Vehicle` → `MotorVehicle` → (`Car` or `DumpTruck`).
* **State Protection:** All technical specifications (speed, engine size, license) are protected via descriptors to ensure they aren't accidentally iterated over or deleted.
* **Method Overriding:** Customized `.toString()` for each level of the hierarchy to provide context-specific information.
* **Accessors:** Implemented public methods to interact with private-like descriptor values.



---

### 💡 Technical Insights

* **Constructor Stealing:** By using `Parent.call(this, ...args)`, we ensure that the parent's logic is executed within the child's context, initializing base properties correctly.
* **Prototype Chaining:** `Child.prototype = Object.create(Parent.prototype)` is the standard way to inherit methods without executing the Parent constructor a second time.
* **valueOf vs. toString:** `valueOf` is preferred by JavaScript during mathematical operations (Type Coercion), while `toString` is used for string concatenation or display.
* **Property Integrity:** Setting `configurable: false` is a powerful way to "freeze" a property, making it immune to the `delete` operator and preventing it from being redefined later.