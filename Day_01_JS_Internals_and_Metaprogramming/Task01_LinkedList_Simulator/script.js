// (1).

/**
 * Make your own custom Object that simulates the linked list that accepts objects with a single numeric property
 * value in ascending order. Let your object has the following functionalities
 * Enqueue a value as long as the value is in the sequence otherwise through an exception
 * Push an item at the end of the list with the passed value.
 * Insert an item in a specific place as long as the value is missing from the sequence otherwise through an exception.
 * Pop a value (remove an item from the end of the list).
 * Remove an item from a specific place with the required
 * value, if the value is not added return a message with “data not found”.
 * Dequeue a value (remove an item from the beginning of the list).
 * Display the content of the list.
 * Ensure that there is no duplication in your entered values.
 * You can add any property you need.
 * Note: Use Array Object methods and there is no need to use sort() function.
 */

// Maintain Ascending Order - Prevent Duplicates
let linkedListObj = {
  data: [],
  isDuplicate: function (value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].val === value) return true;
    }
    return false;
  },

  enqueue: function (value) {
    // Prevent Duplicates
    if (this.isDuplicate(value)) {
      throw Error("Duplicate values are not allowed!");
    }
    // If the Value is > First Element Value ===> Throw Error
    if (this.data.length > 0 && value >= this.data[0].val)
      throw Error(
        "The value MUST be smaller than the first value (" +
          this.data[0].val +
          ")."
      );
    // Insert at the Start
    this.data.unshift({ val: value });
  },

  push: function (value) {
    // Prevent Duplicates
    if (this.isDuplicate(value)) {
      throw Error("Duplicate values are not allowed!");
    }
    // If the Value is < Last Element Value ===> Throw Error
    if (this.data.length > 0 && value <= this.data[this.data.length - 1].val)
      throw Error(
        "The value MUST be greater than the last value (" +
          this.data[this.data.length - 1].val +
          ")."
      );
    // Insert at the End
    this.data.push({ val: value });
  },

  insert: function (index, value) {
    // Takes (Index, Value)
    // Inserts the Value at Specific Index
    // Index Validation
    if (index < 0 || index > this.data.length) {
      throw Error("Invalid index!");
    }
    // Prevent Duplicates
    if (this.isDuplicate(value)) {
      throw Error("Duplicate values are not allowed!");
    }

    // Insert at Beginning
    if (index === 0) {
      this.enqueue(value);
    }
    // Insert at End
    else if (index === this.data.length) {
      this.push(value);
    }
    // If Value At(index - 1) < Value < Value At(index) ==> Correct, Insert
    // Current Value must be Greater than the Previous Value, and Less than the Next Value
    else if (value > this.data[index - 1].val && value < this.data[index].val) {
      // ex: [{val: 1}, {val: 3}, {val: 4}, {val: 5}, ...] ==> Insert(1, 2)
      // 1- Shift the data
      // 1.1- Loop on Each element from the Last Index to the Target Index
      for (let i = this.data.length - 1; i >= index; i--) {
        // 1.2- Store each Element to the (Element Index + 1) position
        this.data[i + 1] = this.data[i];
      }
      // 2- Insert the Value at the Index
      this.data[index] = { val: value };
    }
    // If it damages the Sequence ===> Throw Error
    // Else ===> Throw Error
    else {
      throw Error(
        "Cannot insert at this index (" +
          index +
          ").\nAs this will break the Linked List sequence." +
          "\nAnd no Duplicates Allowed!"
      );
    }
  },

  pop: function () {
    if (this.data.length === 0) {
      throw Error("Cannot pop from an empty list!");
    }
    // Removes the Last Element
    this.data.pop();
  },

  removeByValue: function (value) {
    // Takes (Value) ==> Removes Specific Value
    let targetIndex = -1;
    // Check if the Value Exist
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].val === value) {
        targetIndex = i;
        i = this.data.length;
      }
    }
    if (targetIndex !== -1) {
      this.data.splice(targetIndex, 1);
    }
    // If the value is not found ===> Throw Error
    else {
      throw Error("Data (" + value + ") is not found!");
    }
  },

  removeByIndex: function (index) {
    // Takes (Index) ==> Removes the Value at Specific Index
    // If the Index is outside boundaries ===> Throw Error
    if (index < 0 || index >= this.data.length) {
      throw Error("Invalid index!");
    }
    this.data.splice(index, 1);
  },

  dequeue: function () {
    if (this.data.length === 0) {
      throw Error("Cannot dequeue from an empty list!");
    }
    // Removes the First Element
    this.data.shift();
  },

  displayContent: function () {
    if (this.data.length === 0) {
      console.log("List is empty");
    } else {
      for (let i = 0; i < this.data.length; i++) {
        console.log("Value " + (i + 1) + ": " + this.data[i].val);
      }
      console.log(this.data);
    }
  },
};

// ex: [{val: 1}, {val: 3}, {val: 4}, {val: 5}, ...] ==> Insert(1, 2)
linkedListObj.push(1);
linkedListObj.push(3);
linkedListObj.push(4);
linkedListObj.push(5);
linkedListObj.displayContent();

// linkedListObj.enqueue(1); // Error: Duplicate Value
// linkedListObj.enqueue(3); // Error: The Value is Greater than the First Element

// linkedListObj.push(5); // Error: Duplicate Value
// linkedListObj.push(2); // Error: The Value is Less than the Last Element

linkedListObj.insert(1, 2);
linkedListObj.displayContent();

// linkedListObj.insert(1, 2); // Error: Duplicate Value
// linkedListObj.insert(1, 6) // Error: Duplicate Value

// linkedListObj.pop()
// linkedListObj.dequeue()
// linkedListObj.removeByIndex(2)
// linkedListObj.removeByValue(5)
linkedListObj.displayContent();
