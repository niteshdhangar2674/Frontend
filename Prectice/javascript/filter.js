let people = [
    { name: "Jitender", city: "mumbai" },
    { name: "riyaz", city: "delhi" },
    { name: "Kamini", city: "delhi" },
    { name: "ravi", city: "ahmedabad" },
    { name: "sumit", city: "bangalore" },
];

// city -> delhi, bangalore or ahmedabad
// there name should contains the char i in it.

const cities = ["delhi", "bangalore", "ahmedabad"];

const fPeople = people.filter((p) => {
    let isCityCorrect = cities.includes(p.city);
    let isNameMatch = p.name.includes("r");

    return isCityCorrect && isNameMatch;
});

console.log(fPeople);