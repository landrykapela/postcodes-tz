const postcode = require("./index");

//test with correct city name
test("find postcode of Dar es Salaam", () => {
  expect(postcode.getPostcode("Dar es salaam")).toBe(11000);
});

//test with incorrect city name
test("find psotcode of New York", () => {
  expect(postcode.getPostcode("New York")).toBe("Unknown");
});

//test without city name
test("find postcode without city name", () => {
  expect(() => {
    postcode.getPostcode();
  }).toThrow("The method getPostcode() expects a name parameter");
});
