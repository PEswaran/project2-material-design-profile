import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prof-goals',
  templateUrl: './prof-goals.component.html',
  styleUrls: ['./prof-goals.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfGoalsComponent implements OnInit {
 typesOfShoes = [
 'Create cool css animations',
 'Create and Manipulate Mongo Database',
 'Get comfortable with Angular 2',
 'Get comfortable with Google Material Design',
 'Work with Amazon Web services'];
  public selected:string[];
  public selectedGoals:string[]=[];
rows: Array<string> = []; //explicitly define and init property here
  constructor() { }

  ngOnInit() {

  }
  toggleRow(value:string){
      if(this.selectedGoals.indexOf(value) !== -1){
        this.selectedGoals.splice(this.selectedGoals.indexOf(value), 1);
      }else{
        this.selectedGoals.push(value);
      }
      this.submit(this.selectedGoals);
  }
  submit(selectedGoals) {
    console.log(selectedGoals);
  }


}
