const source = require("./source.json");

//get postcode by using name
exports.getPostcode = name => {
  let result = source.regions.filter(r => {
    if (name !== undefined) {
      //remove hyphens: possible in dar-es-salaam
      name.replace("-", " ");
      return r.name.toLowerCase() == name.toLowerCase();
    } else {
      throw (TypeError, "The method getPostcode() expects a name parameter");
    }
  });
  if (result.length > 0) return result[0].postcode;
  else return "Unknown";
};

//get all list of postcodes with name
exports.getPostcodes = () => {
  let result = [];
  source.regions.map(r => {
    result.push({ name: r.name, postcode: r.postcode });
  });
  return result;
};

//get all orted city/region names only
exports.getCityNames = sortOrder => {
  let result = [];
  source.regions.map(r => {
    result.push(r.name);
  });

  if (sortOrder === undefined) return result;

  if (sortOrder.toLowerCase() === "asc") return result.sort();

  if (sortOrder.toLowerCase() === "desc") return result.sort().reverse();
};
