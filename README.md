# 🚀 Advanced JavaScript | ITI Intake 46

[![Tech](https://img.shields.io/badge/Tech-JS--ES6+-yellow.svg)]()
[![Course](https://img.shields.io/badge/Course-ITI_Intake_45-orange.svg)]()
[![Status](https://img.shields.io/badge/Status-Completed-success.svg)]()

This repository documents my transition from functional scripting to **JavaScript Engineering**. It focuses on the internal mechanics of the JavaScript engine, advanced Object-Oriented patterns, and metaprogramming techniques mastered during the ITI track.

---

## 🗺️ Learning Roadmap

### ⚙️ Phase 1: Engine Internals & Context
* **Execution Context:** Mastering the `this` keyword and explicit binding using `call()`, `apply()`, and `bind()`.
* **Metaprogramming:** Generating code and logic at runtime to automate object property management.
* **Scope & Closures:** Leveraging lexical scope for memory-efficient data hiding.

### 🏗️ Phase 2: Object-Oriented JavaScript
* **Encapsulation:** Creating truly private state within Constructor functions using closures.
* **State Management:** Building complex domain logic within objects (e.g., Numerical Sequences with progression guards).
* **Composition:** Managing relationships between objects without formal class inheritance.

### 🧬 Phase 3: Prototypes & Inheritance
* **The Prototype Chain:** Implementing deep inheritance using `Object.create()` and constructor stealing.
* **Abstract Classes:** Architecting base constructors that serve as blueprints but cannot be instantiated.
* **Singleton Pattern:** Restricting object creation to ensure single-instance integrity.
* **Property Descriptors:** Fine-grained control over object properties (Writable, Enumerable, Configurable) for high data integrity.

---

## 📁 Repository Index

| Day | Milestone | Key Deliverables |
|:---:|:---|:---|
| **01** | **Internals & Context** | Dynamic Getter/Setter Generator & Method Borrowing logic. |
| **02** | **Encapsulation** | Private state Numerical Sequence & Box-Book inventory system. |
| **03** | **OOP Architecture** | Abstract Shape hierarchy, Singletons, and Vehicle deep inheritance. |

---

## 🌟 Key Engineering Highlights

### 🧪 Metaprogramming (Day 01)
Developed a `getSetGen` function that acts as a decorator, automatically injecting accessor and mutator methods into any object it is applied to, significantly reducing boilerplate code.



### 🔒 Strict Data Integrity (Day 03)
Implemented a Shape and Vehicle hierarchy where properties are locked using **Data Descriptors**. By setting `configurable: false` and `writable: false`, the system ensures that critical dimensions and technical specs cannot be accidentally deleted or modified.



### 📐 Operator Overloading (Day 03)
Utilized the `valueOf()` internal hook to allow mathematical operations directly on objects. This allows instances of geometric shapes to be added or subtracted (e.g., `Rect + Square`) based on their calculated areas.