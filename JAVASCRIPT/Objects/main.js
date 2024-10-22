// Write a function to merge two objects into a single object.

const obj1 = {
    num1: 1,
    num2: 2,
};
const obj2 = {
    num3: 3,
    num4: 4,
};
const mergedObj = {
    ...obj1,
    ...obj2,
};

console.log("merge two obj in single object.");
console.log(mergedObj);

// Write a function to convert an object into an array of key-value pairs.	

let obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0 };

let result = Object.keys(obj).map(function (key) {
    return [Number(key), obj[key]];
});

console.log("covert array in object.")
for (let i = 0; i < result.length; i++) {
    for (let z = 0; z < result[i].length; z++) {
        console.log(result[i][z]);
    }
}

// Create an object representing a person with properties like name, age, and occupation. Write functions to update and display the person's information.

class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  const person1 = new Person('aniket', 25, 'surat');
  const person2 = new Person('harsh', 30, 'Ahamadabad');

  console.log("display the person's information:")

  console.log('Person-1 Details:');
  person1.displayDetails();

  console.log('\nPerson-2 Details:');
  person2.displayDetails();

//   Write a function to flatten a nested object into a single-level object.

let ob = {
	Company: "AppMixo",
	Address: "Surat",
	contact: +91-9256987413,
};
const flattenObj = (ob) => {
	let result = {};
	for (const i in ob) {
		if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
			const temp = flattenObj(ob[i]);
			for (const j in temp) {

				result[i + '.' + j] = temp[j];
			}
		}
		else {
			result[i] = ob[i];
		}
	}
	return result;
};

console.log("nested object in single-line object.")
console.log(flattenObj(ob));

// Implement a simple shopping cart system where you can add, remove, and update items in the cart. The cart should be represented as an object.
