const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    utils.trimProperties(input);
    expect(input).toEqual({ foo: "  foo ", bar: "bar ", baz: " baz" });
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    // define input object with string props that have leading and/or trailing whitespace
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    // define expected output object with the same properties but without the extra whitespace
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    // call trimPropertiesMutation with the input object and store the result in actual
    const actual = utils.trimPropertiesMutation(input);
    // use expect(actual).toEqual(expected) to check that the actual input matches the expected output
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: " foo ", bar: "bar ", baz: " baz" };
    const copy = { ...input };
    utils.trimPropertiesMutation(input);
    expect(input).not.toEqual(copy);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    // define an input array of objects, each with an integer property

    const input = [{ integer: 2 }, { integer: 3 }, { integer: 1 }];
    // expected output defined here
    const expected = 3;
    // call findLargestInteger with the input array and store the result in the actual
    const actual = utils.findLargestInteger(input);
    //use this to check taht the actual output matches the expected output
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    // store initial odometer reading
    const initialOdometer = focus.odometer;
    //distance to drive
    const distance = 100;
    const newOdometer = focus.drive(distance);
    expect(newOdometer).toBe(initialOdometer + distance);
  });
  test("[16] driving the car uses gas", () => {
    // store the initial amount of gas..
    const initialTank = focus.tank;
    // drive the car
    const distance = 100;
    focus.drive(distance);

    // check that amount of gas has decreased
    expect(focus.tank).toBeLessThan(initialTank);
  });
  test("[17] refueling allows to keep driving", () => {
    //drive to empty
    focus.drive(601);
    //confirm we can't drive anymore
    const odometerAfterFirstDrive = focus.odometer;
    focus.drive(100);
    expect(focus.odometer).toBe(odometerAfterFirstDrive);
    //refuel
    focus.refuel(focus.tankSize);
    //confirm we can drive again
    focus.drive(100);
    const odometerAfterSecondDrive = focus.odometer;
    // check that the car was able to drive after refueling
    expect(odometerAfterSecondDrive).toBeGreaterThan(odometerAfterFirstDrive);
  });
  // test('[18] adding fuel to a full tank has no effect', () => {})
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
});
