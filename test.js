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

test("Get list of city names with postcodes", () => {
  expect(postcode.getPostcodes()).toHaveLength(31);
});

//get city names when no sort order specified
test("Get list of city name without sort order parameter", () => {
  let id1 = postcode.getCityNames()[9];
  expect(id1).toBe("Kilimanjaro");
});

test("Get list of city names sorted in ascending order", () => {
  let lastCity = postcode.getCityNames("asc")[30];
  expect(lastCity).toBe("Tanga");
});

test("Get list of city names sorted in descending order", () => {
  let lastCity = postcode.getCityNames("desc")[30];
  expect(lastCity).toBe("Arusha");
});

test("Get list of districts for region given region id", () => {
  let darDistricts = postcode.getDistrictsByRegionId(1)[0];
  expect(darDistricts.name).toBe("Ilala CBD");
});

test("Get list of wards for given district id", () => {
  let ward = postcode.getWardsForDistrict(1)[1];
  expect(ward.name).toBe("Buguruni");
});
