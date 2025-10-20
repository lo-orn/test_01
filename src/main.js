import "./style.css";
class Person {
  name;
  age;
  length;
  eyecolor;

  constructor(name, age, length, eyecolor) {
    this.name = name;
    this.age = age;
    this.length = length;
    this.eyecolor = eyecolor;
  }
}

const me = new Person("Lo", 32, "170cm", "blue");
const wife = new Person("Isabella", 32, "163cm", "brown");

const family = [me, wife];

family.forEach((person) => {
  const familyDiv = document.createElement("div");
  familyDiv.className = "familyDiv";

  const name = document.createElement("h2");
  name.innerHTML = person.name;

  const age = document.createElement("p");
  age.innerHTML = person.age;

  const length = document.createElement("p");
  length.innerHTML = person.length;

  const eyecolor = document.createElement("p");
  eyecolor.innerHTML = person.eyecolor;

  familyDiv.appendChild(name);
  familyDiv.appendChild(age);
  familyDiv.appendChild(length);
  familyDiv.appendChild(eyecolor);
  app.appendChild(familyDiv);
});
