# 🏗️ Day 02 - Constructor Functions & Encapsulation

### 🎯 Objectives
* **Private State Management:** Utilize closures within constructor functions to create truly private variables and methods.
* **Encapsulation:** Build objects that manage their own internal state and expose logic through public interfaces.
* **Domain Logic Enforcement:** Implement strict "Guards" to ensure that data remains sequential and non-duplicated.
* **Complex Object Composition:** Manage relationships between different object types (Box and Book) without using formal inheritance.

---

### 📄 Lab Modules

#### 🔢 Module 1: Numerical Sequence Constructor
A robust implementation of a sequence generator that enforces mathematical progression.
* **Private Logic:** The `numericalList` array is defined inside the constructor scope, making it inaccessible from the outside.
* **Initialization:** Uses an Immediately Invoked Function Expression (IIFE) to populate the list based on start, end, and step parameters.
* **Progression Guard:** The `append` and `prepend` methods calculate the "Predicted Next Value" based on the `step`. If the user tries to break the sequence, a custom exception is thrown.



#### 📦 Module 2: Box & Book Management System
A demonstration of object interaction and collection management.
* **Composite Properties:** The `Box` object contains a `content` array that holds multiple `Book` objects.
* **Smart Insertion:** The `addBook` method checks for existing titles. If a book exists, it increments the `numberOfCopies` instead of creating a duplicate entry, maintaining a clean inventory.
* **Integrity:** Automatically syncs the `numberOfBooks` property whenever a book is added or removed via the internal `getBookIndex` utility.

---

### 💡 Technical Insights

* **Closures as Private Members:** By defining `let numericalList` inside the `NumericalSequence` function, it is protected from accidental external modification. Only the methods attached to `this` can "see" and modify it.
* **Reference vs. Value:** In the Box task, passing a `Book` object into `addBook` passes a reference. This allows the Box to modify the `numberOfCopies` property of the book directly if it's already present in the collection.
* **Validation Patterns:** Using `arguments.length` and `typeof` (from Day 1) combined with logical checks (like `value === nextSeqValue`) creates "Defensive Code" that prevents the application from entering an invalid state.


### 📝 Commit Messages

| Task / File | Commit Message |
| :--- | :--- |
| **Task 01** | `feat: implement NumericalSequence with private state and progression guards` |
| **Task 02** | `feat: build Box and Book system with smart inventory management` |