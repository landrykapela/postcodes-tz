const source = require("./source.json");

//get postcode by using name
exports.getPostcode = name => {
  let result = source.regions.filter(r => {
    if (name !== undefined) {
      //remove hyphens: possible in dar-es-salaam
      // name.replace("-", " ");
      return r.name.toLowerCase() == name.toLowerCase();
    } else {
      throw (TypeError, "The method getPostcode() expects a name parameter");
    }
  });
  if (result.length > 0) {
    let postcode = result[0].postcode;
    // console.log("result: ", postcode);
    return postcode;
  } else {
    // console.log("result: ", name + " is not a valid region/city in Tanzania");
    return "Unknown";
  }
};

//get all list of postcodes with name
exports.getPostcodes = () => {
  let result = [];
  source.regions.map(r => {
    result.push({ name: r.name, postcode: r.postcode });
  });
};
