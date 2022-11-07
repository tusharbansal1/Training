function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.name())

const person0 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
  console.log(person0.lang)

  const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  person1.lang = "en";
  console.log(person1.language)

  const arr=Object.values(person0)
  console.log(arr)

  const s=JSON.stringify(person1)
  console.log(s)