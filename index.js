// code your solution here
//function receive 1 argument, an Array of JS Objects
//Each Obj has two properties: year and result
//It should use find() to test each Object to see if the result is "W"-- a win!
//It should return the year when the win occurred (IF it occurred at all)
//If no win is found, it should return undefined
//use Array.prototype.find( )
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "N/A"},
    { year: "2004", result: "N/A"},
    { year: "2003", result: "N/A"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "W"},
    { year: "1997", result: "W"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1994", result: "N/A"},
    { year: "1993", result: "N/A"},
    { year: "1992", result: "N/A"},
    { year: "1991", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", result: "L"},
    { year: "1988", result: "N/A"},
    { year: "1987", result: "L"},
    { year: "1986", result: "L"},
    { year: "1985", result: "N/A"},
    { year: "1984", result: "N/A"},
    { year: "1983", result: "N/A"},
  ]
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(record){
  let winResult = record.find(record => record.result === "W")
  //winResult variable will satisfy a search within the record Array, that returns a truthy value if any result key within the record Array is strictly equal to "W"
  return winResult ? winResult.year : undefined //if meets result condition, return winResult year. Otherwise return undefined for not meeting conditions
}

console.log(superbowlWin(record)) // => 2015
console.log(superbowlWin(sadReality)) // => undefined