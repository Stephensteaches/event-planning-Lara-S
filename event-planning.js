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
