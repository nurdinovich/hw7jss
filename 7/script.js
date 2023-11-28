const form = document.getElementById("personForm");
form.addEventListener("submit", function(event) {
          event.preventDefault();
          const name = document.getElementById("nameInput").value;
          const age = Number(document.getElementById("ageInput").value);
          const id = document.getElementById("idInput").value;
          const lastName = document.getElementById("lastNameInput").value;
    
          pushPerson(name, age, id, lastName);
    
          console.log(personsArray);
          form.reset(); 
        });

class Person {
constructor(name, age, id, lastName) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.lastName = lastName;
}
}
          
let personsArray = [];

function pushPerson(name, age, id, lastName) {
    let person = new Person(name, age, id, lastName);
        personsArray.push(person);
}
          
          
pushPerson("Muhammaddior", 16, 1234, "Esanbaev");
pushPerson("Nurseit", 18, 5678, "Nuridinov");
          
console.log(personsArray);

 