const functions = require("./functions");

// toBe
test("Adds 2 + 2 to equal 4", () => {
  // this is saying, 'this function with these parameters (2,2) is to be 4'
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 5", () => {
  // this is saying, 'this function with these parameters (2,2) is to be 4'
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("Should be null", () => {
  // this is saying, 'this function with these parameters (2,2) is to be 4'
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  // this is saying, 'this function with these parameters (2,2) is to be 4'
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test("User should be Gabe Austin object", () => {
  // this is saying, 'this function with these parameters (2,2) is to be 4'
  expect(functions.createUser()).toEqual({
    firstName: "Gabe",
    lastName: "Austin",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThan(1600);
});
