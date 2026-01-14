# 🌐 Day 01 - JavaScript Internals & Metaprogramming

### 🎯 Objectives
* **Custom Data Structures:** Simulate a Linked List using an object-oriented approach while enforcing sorted order and non-duplication.
* **Execution Context:** Master the explicit binding of `this` using `call()`, `apply()`, and `bind()`.
* **Metaprogramming:** Build a dynamic property generator to inject Getters and Setters into objects at runtime.
* **Validation:** Implement strict error handling to protect data integrity within custom objects.

---

### 📄 Lab Modules

#### 🔗 Module 1: Sorted Linked List Simulator
A custom object implementation that mimics a linked list behavior using an internal array.
* **Logic:** Prevents duplicates and maintains a strict ascending order without using the native `.sort()` method.
* **Methods:** Includes `enqueue` (start), `push` (end), `insert` (index-based), and removal methods (`pop`, `dequeue`, `removeByValue`).
* **Algorithm:** Manually handles element shifting for index-based insertion to maintain sequence integrity.



#### 🛠️ Module 2: Method Borrowing (Context Manipulation)
Demonstrated how to use `Array.prototype` methods on "Array-like" objects (such as `arguments`) using:
* **`.call()`:** Immediate execution with a specific context.
* **`.apply()`:** Immediate execution using an array of arguments.
* **`.bind()`:** Creating a permanent link between a function and a context for later execution.



#### 🏗️ Module 3: Metaprogramming (Getter/Setter Generator)
Implemented `getSetGen`, a function that dynamically adds accessor and mutator methods to any object.
* **Dynamic Injection:** Iterates through object properties and creates methods like `getName()` and `setName()` automatically.
* **Closure Scope:** Uses IIFEs (Immediately Invoked Function Expressions) to capture the property key in a private scope for each generated function.



---

### 💡 Technical Insights

* **The `arguments` Trap:** Since `arguments` is not a true Array, it lacks a `.reverse()` method. Borrowing the method from `Array.prototype` is a fundamental pattern for handling variable-length function inputs.
* **Property Ownership:** In the generator, `hasOwnProperty` is used to ensure we only generate methods for the object's own data, not inherited prototype properties.
* **Sorted Insertion:** For the Linked List, checking `value > previous && value < next` ensures that the list remains mathematically sorted at every step, avoiding the overhead of sorting the entire collection after every change.