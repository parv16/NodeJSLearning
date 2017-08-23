/*
@Author:Parv Jain

The URL module splits up a web address into readable parts.

Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties
*/
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata)
console.log(qdata.month); //returns 'february'