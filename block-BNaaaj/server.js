// http protocol
var url = require("url");
const parsedUrl = url.parse( "https://airindia.com/fares/calculate?from=delhi&to=detroit", true );
console.log(parsedUrl.query);
console.log(parsedUrl.protocol);
console.log(parsedUrl.pathname);