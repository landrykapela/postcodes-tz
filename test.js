const postcode = require("./index");
const chai = require("chai");

let expect = chai.expect;

describe("#getPostcode", () => {
  //test with a wrong city/region name parameter
  context("with incorrect city name paramater", () => {
    it("should return N/A", () => {
      expect(() => {
        postcode.getPostcode("New York");
      }).to.equal("N/A");
    });
  });

  //test without a name parameter
  context("without a name parameter", () => {
    it("should throw error", () => {
      expect(() => {
        postcode.getPostcode();
      }).to.throw(Error, "The method getPostcode() expects a name parameter");
    });
  });

  //test with a correct city/region name parameter
  context("with a correct region/city name parameter", () => {
    it("should return 11000", () => {
      expect(() => {
        postcode.getPostcode("Dar es salaam");
      }).to.equal(11000);
    });
  });
});
