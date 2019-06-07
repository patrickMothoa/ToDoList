import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List'
  
  Done = [" ----- Select To Do List ------ "]
  newDuty : string =""

   ToDo(){
    this.Done.push(this.newDuty);
    this.newDuty = ""
  }

  delete(Now){
    let index = this.Done.indexOf(Now)
    this.Done.splice(index, 1);
  }
   
  editTask(Now){
      let index = this.Done.indexOf(Now)
      this.Done[index] = prompt("Edit task:",Now)
  }
}
