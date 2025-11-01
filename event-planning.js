// write a function whos purpose is to generate name badges and role
// the parameters will be an array with objects that contain name and role properties
//the function should return a string value with "Name: (name), Role: (role)"
//for each object in the array and be separated by a new line
function generateBadges(name, role) {
    console.log("Name: " + name + ", Role: " + role);

}

generateBadges("Jane Doe", "Speaker");
generateBadges("John Smith", "Attendee");
generateBadges("Emily Davis", "Organizer");

//write a function to calculate the cost of an event based on number of attendees
//the function should take in the number of attendees as one parameter and the
//cost per attendee as the second parameter
//if the number of attendees is greater than 100, apply a 10% discount to the total cost

function calculateCost(numAttendees, costPerAttendee) {
    let totalCost = numAttendees * costPerAttendee;
    if (numAttendees >100) {
        totalCost = totalCost * 0.9;
    }
    return totalCost;
}

console.log(calculateCost(150, 20)); // Should apply discount = 2700
console.log(calculateCost(80, 25));  // Should not apply discount = 2000
console.log(calculateCost(200, 15)); // Should apply discount = 2700


//write a function to validate email addresses for attendee registration
//the function should return true if the email contains a "@" symbol and a "." symbol
//and false if it does not

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    }
    return false;
}
console.log(validateEmail("jane.doe@example.com")); // Should return true
console.log(validateEmail("jane.doe@example"));     // Should return false
console.log(validateEmail("janedoe.com"));          // Should return false

