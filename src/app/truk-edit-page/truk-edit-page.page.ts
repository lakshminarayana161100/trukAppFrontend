import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-truk-edit-page',
  templateUrl: './truk-edit-page.page.html',
  styleUrls: ['./truk-edit-page.page.scss'],
})
export class TrukEditPagePage implements OnInit {
  toppings: any;
  data:any;
  dropdownList:any[]= [];
  selectedItems:any= [];
  dropdownSettings!: IDropdownSettings;
  vehiclenumber:any;
  currentLocation:any;
  capacity:any;
   Items: any;
   date:any;
   real:any;
   

   updateproductForm!: FormGroup;
  objects: any;
  products: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {




    this.objects = localStorage.getItem("TrukPosted");  //use the localstorage we getdata from savedData
    //The localStorage object allows you to save key/value pairs in the browser.
    this.real=JSON.parse(this.objects)  //parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
  
    console.log(this.objects)
    //this.get()

    this.updateproductForm = this.fb.group({
      selectedItems: [''],
      capacity: [''],
      currentLocation: [''],
      data: [''],
      date: [''],
      vehiclenumber:['']

    });



    this.dropdownList = [
      {  item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
     
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  out(data:any){
    console.log(data)
    this.data=data
  }




  //updateform(PUT API)
  updateForm(data: any) {
    console.log(data)
    //console.log(this.description, this.image, this.price, this.description, this.name)
    console.log(this.real._id)
    fetch("http://localhost:3000/addTruk/updateLoads/" + this.real._id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),

          this.products =JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        
        this.updateproductForm.reset();   // form reset
        window.location.reload()  // reloading window
        
      }

      ).catch(err =>
        console.log(err))
  }


}
