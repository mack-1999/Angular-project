import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Events in Angular";

  getName(){
    alert('Function Called');
  }

  displayVal: String= "";

  getData(val: string){
    this.displayVal = val;
  }

  disData(){
    this.displayVal = "Mouse Events";
  }

  // Counter Function
  counterVal: number=0;

  counter(type:string): number {
    return type === "add" ? this.counterVal++ : this.counterVal--;
  }

  show='true';

  valfalse(val:string){
    this.show = val;
  }

  // Multiple conditions or Else-if
  color = 'green';

  // Switch Case
  switchcase = 'red';
  //use any random value for default case

  //Arrays
  users = ['Mack','Jack','Bob','Sack'];

  // Arrays of objects
  usersDetails = [
    {name: 'Mack',email: 'mack@gmail.com',phone: '902892'},
    {name: 'Jack',email: 'jack@gmail.com',phone: '808960'},
    {name: 'Sack',email: 'sack@gmail.com',phone: '704569'}
  ];
}
