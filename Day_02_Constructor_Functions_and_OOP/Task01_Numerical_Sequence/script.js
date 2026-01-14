// (1).

/**
 * Create your own object that contains a list of numerical sequence, with the following details
 * Your constructor takes 3 parameters to define start, end of list and step
 * The list should be private and filled with private method
 * You can create getter and setter for the list if needed
 * Allow the user to apply the following functionality to his created sequence
 *    o Append or prepend a new value
 *    o Dequeue or pop a value,
 *    o you have to ensure that you are pushing sequential value otherwise through exception
 *    o you have to ensure that there is no duplicated value otherwise through exception
 * you can add any property you need.
 */

function NumericalSequence(start, end, step) {
  let numericalList = [];
  // Initialize the Sequence
  (function initializeSequence() {
    if (step === 0) throw Error("Step must be greater than zero.");
    for (let i = start; i <= end; i += step) {
      numericalList.push(i);
    }
  })();

  // Insert at the End
  this.append = function (value) {
    // Insert when the List is Empty
    if (numericalList.length === 0) {
      numericalList.push(value);
      return;
    }
    // Insert at the End but Preserve the Step
    let nextSeqValue = numericalList[numericalList.length - 1] + step;
    // If the Input Value == Next Predicted Sequence Value ----> Insert it
    if (value === nextSeqValue) numericalList.push(value);
    // Else throw Error
    else
      throw Error("Cannot insert this value: " + value + " to the Sequence!");
  };

  // Insert at the Start
  this.prepend = function (value) {
    // Insert when the List is Empty
    if (numericalList.length === 0) {
      numericalList.push(value);
      return;
    }
    // Insert at the End but Preserve the Step
    let previousSeqValue = numericalList[0] - step;
    // If the Input Value == Previous Predicted Sequence Value ----> Insert it
    if (value === previousSeqValue) numericalList.unshift(value);
    // Else throw Error
    else
      throw Error("Cannot insert this value: " + value + " to the Sequence!");
  };

  // Remove from the Start
  this.dequeue = function () {
    if (numericalList.length === 0)
      throw Error("Cannot dequeue from an empty sequence!");
    numericalList.shift();
  };

  // Remove from the End
  this.pop = function () {
    if (numericalList.length === 0)
      throw Error("Cannot pop from an empty sequence!");
    numericalList.pop();
  };

  this.displaySequence = function () {
    let sequenceString = "[ " + numericalList.join(" | ") + " ]";
    console.log(sequenceString);
    return sequenceString;
  };
}

let seq = new NumericalSequence(2, 10, 2); // [2, 4, 6, 8, 10]
seq.displaySequence();

seq.append(12);
seq.prepend(0);
seq.prepend(-2);
console.log(
  "%cSuccess cases passed",
  "color: #32CD32; font-size: 20px; font-weight: bold;"
);

// seq.append(16)
// seq.prepend(-6);

seq.displaySequence();
seq.dequeue(); // [0, 2, 4, 6, 8, 10, 12]
seq.pop(); // [0, 2, 4, 6, 8, 10]
seq.dequeue(); // [2, 4, 6, 8, 10]
seq.pop(); // [2, 4, 6, 8]
seq.dequeue(); // [4, 6, 8]
seq.pop(); // [4, 6]
seq.dequeue(); // [6]
seq.pop(); // []
seq.displaySequence();
// seq.dequeue(); // Empty ==> Error
