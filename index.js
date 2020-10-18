const source = require("./source.json");
const districts_source = require("./districts.json");

//get districts for region id
exports.getDistrictsByRegionId = (regionId) => {
  return districts_source.districts.filter((d) => {
    return d.region == regionId;
  });
};

//get districts for region name
exports.getDistrictsRegionName = (regionName) => {
  let regions = source.regions.filter((r) => {
    return r.name.toLowerCase() == regionName.toLowerCase();
  });
  if (regions.length > 0) {
    let region = regions[0];
    let districts = districts_source.districts.filter((d) => {
      return d.region == region.id;
    });
    return districts;
  } else return [];
};

//get wards
exports.getWardsForDistrict = (districtId) => {
  let districts = districts_source.districts.filter((d) => {
    return d.id == districtId;
  });
  if (districts.length > 0) {
    let dist = districts[0];
    return dist.wards;
  } else return [];
};

//get mitaa for ward
exports.getMitaaForWard = (districtId) => {
  let districts = districts_source.districts.filter((d) => {
    return d.id == districtId;
  });
  if (districts.length > 0) {
    let dist = districts[0];
    return dist.wards;
  } else return [];
};

//get postcode by using name
exports.getPostcode = (name) => {
  let result = source.regions.filter((r) => {
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
  source.regions.map((r) => {
    result.push({ name: r.name, postcode: r.postcode });
  });
  return result;
};

//get all orted city/region names only
exports.getCityNames = (sortOrder) => {
  let result = [];
  source.regions.map((r) => {
    result.push(r.name);
  });

  if (sortOrder === undefined) return result;

  if (sortOrder.toLowerCase() === "asc") return result.sort();

  if (sortOrder.toLowerCase() === "desc") return result.sort().reverse();
};
