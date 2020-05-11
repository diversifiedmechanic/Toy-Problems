/*
 You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

    weight: the weight of the cake in kilograms
    value: the monetary value of the cake in British shillings

For example:

  // Weighs 7 kilograms and has a value of 160 shillings
{ weight: 7, value: 160 }

// Weighs 3 kilograms and has a value of 90 shillings
{ weight: 3, value: 90 }

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.
*/

function maxDuffelBagValue(cakeTypes, capacity) {
  // edge case that the bag can't carry anything
  if (capacity === 0) return 0;

  // create an array, sorted in the most valuable to least valuable
  let ratios = [... cakeTypes].sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  // var to track if the bag is full
  let roomInBag = true;
  let indexInRatios = 0;
  let totalValue = 0;

  while (capacity > 0 && indexInRatios < ratios.length) {
    // check to see if the current index can fit in the bag
    // if it can
    if (capacity - ratios[indexInRatios].weight >= 0) {
      // add the value to total
      totalValue += ratios[indexInRatios].value;
      // subtract the weight from capacity
      capacity -= ratios[indexInRatios].weight;

    // if it cannot
    } else {
      // increase the index of ratio array
      indexInRatios += 1;
    }
  }

  return totalValue;
}

// let desc = 'one cake';
// let actual = maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
// let expected = 4;
// assertEqual(actual, expected, desc);

desc = 'two cakes';
actual = maxDuffelBagValue([
  { weight: 4, value: 4 },
  { weight: 5, value: 5}], 9);
expected = 9;
assertEqual(actual, expected, desc);

// desc = 'only take less valuable cake';
// actual = maxDuffelBagValue([
//   { weight: 4, value: 4 },
//   { weight: 5, value: 5 }], 12);
// expected = 12;
// assertEqual(actual, expected, desc);

// desc = 'lots of cakes';
// actual = maxDuffelBagValue([
//   { weight: 2, value: 3 },
//   { weight: 3, value: 6 },
//   { weight: 5, value: 1 },
//   { weight: 6, value: 1 },
//   { weight: 7, value: 1 },
//   { weight: 8, value: 1 }], 7);
// expected = 12;
// assertEqual(actual, expected, desc);

// desc = 'value to weight ratio is not optimal';
// actual = maxDuffelBagValue([
//   { weight: 51, value: 52 },
//   { weight: 50, value: 50 }], 100);
// expected = 100;
// assertEqual(actual, expected, desc);

// desc = 'zero capacity';
// actual = maxDuffelBagValue([{ weight: 1, value: 2 }], 0);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'cake with zero value and weight';
// actual = maxDuffelBagValue([
//   { weight: 0, value: 0 },
//   { weight: 2, value: 1 }], 7);
// expected = 3;
// assertEqual(actual, expected, desc);

// desc = 'cake with non-zero value and zero weight';
// actual = maxDuffelBagValue([{ weight: 0, value: 5 }], 5);
// assertEqual(isFinite(actual), false, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
