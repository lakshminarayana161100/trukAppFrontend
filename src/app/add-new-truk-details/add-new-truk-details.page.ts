import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-new-truk-details',
  templateUrl: './add-new-truk-details.page.html',
  styleUrls: ['./add-new-truk-details.page.scss'],
})
export class AddNewTrukDetailsPage implements OnInit {


  toppings: any;
  data: any;
  dropdownList: any[] = [];
  operatingRoutes: any = [];
  dropdownSettings!: IDropdownSettings;
  vehicleNo: any;
  vehicleCurrentLocation: any;
  vehicleCapacity: any;
  Items: any;
  date: any;
  DriverName: any;
  DriverNumber: any;
  vehicleType:any;
 _id: any;

  constructor() { }

  ngOnInit() {


    this.dropdownList = [
      'Amaravati', 
      'Itanagar',
      'Dispur',
      'Patna',
      'Raipur',
      'Panaji',
      'Gandhinagar',
      'Chandigarh',
      'Shimla',
      'Ranchi',
      'Bangaluru',
      'Thiruvananthapuram',
      'Bhopal',
      'mumbai',
      'Imphal',
      'Shillong',
      'Aizawl',
      'Kohima',
      'Bhubaneswar',
      'Chandigarh',
      'Jaipur',
      'Gangtok',
      'Chennai',
      'Hyderabad',
      'Agartala',
      'Lucknow',
      'Kolkata',
      'delhi',
      'Pune',
    ];
    this.operatingRoutes = [

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

  out(data: any) {
    console.log(data)

    this.vehicleType = data
    // console.log(this.data)

  }
  NewPostAdd() {


    var data = {
      operatingRoutes: this.operatingRoutes,
      vehicleType: this.vehicleType,
      vehicleNo: this.vehicleNo,
      vehicleCurrentLocation: this.vehicleCurrentLocation,
      vehicleCapacity: this.vehicleCapacity,
      date: this.date,
      DriverName: this.DriverName,
      DriverNumber: this.DriverNumber,
      //this is load ID we have to make this dynamic
      _id:"63e4cbb10c1e2c6d00db2738"
    }
    console.log(data)
    localStorage.setItem("newpostAdd", JSON.stringify(data));

    fetch("http://localhost:3000/quotes/attachVehicleToLoad", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.Items = result  
          
      }

      ).catch(err =>
        console.log(err))
  }


  }

