// rectangle : length = 5, width = 3
let length = 5
let width = 3
let area = length * width
console.log(area);

// perimeter of rectangle : length = 5, width = 3, output = 16
let perimeter = 2 * (length + width);
console.log(perimeter);

// diameter, circumference and area of a circle : radius = 5
let radius = 5
let diameter = 2 * radius
let circumference = 2 * 3.14 * radius
let luas = 3.14 * radius * radius

console.log(diameter);
console.log(circumference);
console.log(luas);

// angles of triangel: a = 80, b = 65
let a = 80
let b = 65
let angles = 180 - (a + b );
console.log(angles);

// convert days to years, months and days ( 1 year= 365 days, 1 month= 30days)
let days1 = 400
let years = Math.floor (days1 / 365); 
let remainingdays = days1 % 365
let months = Math.floor (remainingdays / 30);
let sisahari = remainingdays % 30

console.log(years, "tahun,", months, "bulan,", sisahari, "hari");

let days2 = 366
let years2 = Math.floor (days2 / 365); 
let remainingdays2 = days2 % 365
let months2 = Math.floor (remainingdays2 / 30);
let sisahari2 = remainingdays2 % 30

console.log(years2, "tahun,", months2, "bulan,", sisahari2, "hari");

// difference between dates in days
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

let diff = date2.getTime() - date1.getTime();
let days = diff / (1000 * 60 * 60 * 24);
console.log(days);