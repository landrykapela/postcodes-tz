const postcode = require("./index");
// const chai = require("chai");
// const jest = require("jest");
// let expect = chai.expect;

// describe("#getPostcode", () => {
//   //test with a wrong city/region name parameter
//   context("with incorrect city name paramater", () => {
//     it("should return false", () => {
//       expect(() => {
//         postcode.getPostcode("New York");
//       }).to.equal(false);
//     });
//   });

//   //test without a name parameter
//   context("without a name parameter", () => {
//     it("should throw error", () => {
//       expect(() => {
//         postcode.getPostcode();
//       }).to.throw(Error, "The method getPostcode() expects a name parameter");
//     });
//   });

//   //test with a correct city/region name parameter
//   context("with a correct region/city name parameter", () => {
//     it("should return number equal to postcode", () => {
//       expect(() => {
//         postcode.getPostcode("Dar es salaam");
//       }).to.equal(11000);
//     });
//   });
// });

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
