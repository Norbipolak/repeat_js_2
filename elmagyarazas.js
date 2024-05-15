const data = [
    {
        name: "John",
        age: 30,
        hobbies: ["reading", "gardening"],
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        name: "Alice",
        age: 25,
        hobbies: ["painting", "traveling"],
        address: {
            city: "London",
            country: "UK"
        }
    }
];

// Iterate through the array of objects
data.forEach((person, index) => {
    console.log(`Person ${index + 1}:`);
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    
    // Iterate through hobbies array
    console.log("Hobbies:");
    person.hobbies.forEach((hobby, hobbyIndex) => {
        console.log(`- ${hobby}`);
    });

    // Access nested address object
    console.log(`Address: ${person.address.city}, ${person.address.country}`);
    
    console.log("--------------------");
});

/*
Person 1:
Name: John
Age: 30
Hobbies:
- reading
- gardening
Address: New York, USA
--------------------
Person 2:
Name: Alice
Age: 25
Hobbies:
- painting
- traveling
Address: London, UK
--------------------
*/
