import {pTable, pTableUnits, pTableProperties} from '../index.js';

var pt = JSON.parse(pTable)
var units = JSON.parse(pTableUnits)
var props = JSON.parse(pTableProperties)
console.log(`>Props (abundance):${props.abundance}\n>Second element universal abundance:${pt[1].abundance.universe}${units.abundance.universe } }`)

console.log("----------Table----------");
console.log(pTable);
console.log("----------Props----------");
console.log(pTableProperties);
console.log("----------Units----------");
console.log(pTableUnits);