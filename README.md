[![Coverage Status](https://coveralls.io/repos/github/landrykapela/postcodes-tz/badge.svg?branch=dev)](https://coveralls.io/github/landrykapela/postcodes-tz?branch=dev)

[![Build Status](https://travis-ci.com/landrykapela/postcodes-tz.svg?branch=dev)](https://travis-ci.com/landrykapela/postcodes-tz)

A library to get a list of postcodes for Tanzania
The row data about the cities/regions and their posts codes is in the source.json file. This data was extracted from the TCRA resources publications

Installation:
    npm install postcodes-tz
    
To use in your app
    require('postcodes-tz')
    
Available Methods
    getPostcode(city_name): this one returns the postcode of the city
    getPostcodes(): returns an array of the city names and postcodes. 
    getCityNames(sortOrder) return a sorted array of the city names. sortOder can be "asc" or "desc"
    

