// First task
let times;

let callback;

let loop(times = 0, callback = null) => { 
  if (callback === null){
    console.log ("this function require callback");
  } else {
    if (times === 0){
      console.log("times must be greater than 0")
    } else {
      for (let i = 0; i < times; i++){
        callback();
      }
    }
  }
}

//Second task
let calculateArea(height, width) => ({
  area: height * width,
  figure: () => {if (height == width) {document.write("square")}else{document.write("rectangle")}},
  input: [height, width]                               
});

// Third task
class Human {
  
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  set dateOfBirth(value) {
    this.dateOfBirth = value;
  }
  
  age(dateOfBirth) {
    let now = new Date();
    let years = now.getFullYear() - dateOfBirth.getFullYear();

    // Reset birthday to the current year.
    dateOfBirth.setFullYear(now.getFullYear());

    // If the user's birthday has not occurred yet this year, subtract 1.
    if (now < dateOfBirth)
      {
          years--;
      }
    return years;
    }
    displayinfo(){
      return `Full name: ${firstName} ${lastName}, age: ${age}, dateOfBirth: ${dateOfBirth}`
    }
}

class Employee extends Human {
    set salary(value) {
        this.salary = value;
    }
    set department(value) {
        this.department = value;
    }
    
    displayinfo(){
        super.displayinfo() + ` salary: ${salary}, department: ${department}`;
    }
}

class Developer extends Employee {
    
}

class Manager extends Employee {
    
    set developerList(value){
        this.developerList = value;
    }
    
    addDeveloper(developer){
        this.developerList.push(developer);
    }
    
    delDeveloper(developer){
        let i = this.developerList.indexOf(developer);
        this.developerList.splice(i, 1);
    }
}