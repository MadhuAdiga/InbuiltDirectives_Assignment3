import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app/app.component.html`
})


export class AppComponent  {  // Create a class AppComponent with app.component.html as templateUrl
    filterArr:any=[];   // This array stores the names of the employees of the chosen input role
    checkRole(chosenRole:string){ // method that takes the input string as parameter
        for(let x of this.user_arr){ // iterate through the user_arr and check if any of the role matches the input role
            if(chosenRole.toLowerCase().trim()===x.role){ //apply toLowerCase and trim ends of the input string before comparison
                this.filterArr.push(x.name); // if a match is found, push the employee name to the filterArr for display in the html
            }  
        }
    
    }
    reset() { // a method reset empties the filterArr so that new employee list can be added with a new input role
        this.filterArr=[];
        this.filterArr.length=0;

    }
    
    
    public user_arr:any[] = [ // an array of objects containing the employee details
        {
        name: "Crawford Maxwell",
        age: 30,
        role: "admin",
        },
        {
        name: "Rob Hoyt",
        age: 26,
        role: "member",
        },
        {
        name: "Gordon Cody",
        age: 28,
        role: "member",
        },
        {
        name: "Bala Savitri",
        age: 24,
        role: "member",
        },
        {
        name: "Kumari Madhavi",
        age: 29,
        role: "admin",
        },
        {
        name: "Radha Saraswati",
        age: 29,
        role: "super admin",
        },
        {
        name: "Sundara Baladeva",
        age: 30,
        role: "member",
        },
        {
        name: "Varuna Pitambara",
        age: 24,
        role: "supervisor",
        }
        
    ]
   
}
 
