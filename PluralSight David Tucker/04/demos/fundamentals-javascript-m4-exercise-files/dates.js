// Dates and Times
// JavaScript has a built-in Date object that allows you to work with dates and times.
// The Date object is created with the new Date() constructor.
// The Date object can be created in several ways:
// 1. Using the current date and time
// 2. Using a date string
// 3. Using a date object
// 4. Using a timestamp
// 5. Using a date and time string
// 6. Using a date and time string with a timezone offset
// 7. Using a date and time string with a timezone name
// 8. Using a date and time string with a timezone abbreviation
// 9. Using a date and time string with a timezone offset and a timezone name
// 10. Using a date and time string with a timezone offset and a timezone abbreviation
// 11. Using a date and time string with a timezone offset and a timezone name and a timezone abbreviation
// 12. Using a date and time string with a timezone offset and a timezone name and a timezone abbreviation and a timezone offset     

// Create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar Date: ${date1.toDateString()}`);

// Display a locale-specific date string
console.log(`Locale en-US : ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB : ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP : ${date1.toLocaleDateString('ja-JP')}`);

// Display just the time
console.log(`Date Time: ${date1.toTimeString()}`);

// Display a locale-specific time string
console.log(`locale en-US : ${date1.toLocaleTimeString('en-US')}`);
console.log(`locale en-GB : ${date1.toLocaleTimeString('en-GB')}`);
console.log(`locale ja-JP : ${date1.toLocaleTimeString('ja-JP')}`);

// Custom date string
let options = {
  dateStyle: "short",
  timeStyle: "short"};

console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW', options)}`);




/*

// Create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar Date: ${date1.toDateString()}`);

// Display a locale-specific date string
console.log(`Locale en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

// Display just the time
console.log(`Date Time: ${date1.toTimeString()}`);

// Display a locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);

// Custom date string
let options = {
  dateStyle: "short",
  timeStyle: "short"
};
console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW', options)}`);

*/