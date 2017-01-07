import { Component, OnInit } from '@angular/core';
import{ Http } from '@angular/http'; 
declare var firebase: any;
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    this.getData();
  }
 getData(){
   console.log("k")
        firebase.database().ref('/').on('child_added', (snapshot)=>{
          console.log(snapshot)
        })
  }
}
