import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  item:any = [];
  filter:any
  categories = ['LCV','Truk','Hyva','container','Tanker'];
  lcv=false;
  truck=false;
  hyva=false;
  container=false;
  tanker=false;
  trailer=false;
  vehiclenumber:any;
  capacity:any;
  data:any;
  currentLocation:any;
  selectedItems:any;

  constructor() { }

  ngOnInit() {

    this.get()
     
    
  }

  onCategoryChange(category:any){
    console.log(category)

  }
  toggle(data:any){
    this.filter=data
    this.get()
console.log(data)
  }

  get(){
    console.log(this.filter)
    fetch("http://localhost:3000/addTruk/filterByVehicle/" + this.filter, {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.vehicle
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }
}
