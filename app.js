let age = 22;
let name = "Nam";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 30000,
};

let adultYear;

function calculateAdultYears() {
  adultYear = age - 18;
}

calculateAdultYears();
alert(adultYear);
