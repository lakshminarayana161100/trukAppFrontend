import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  item: any = [];

  filter: any
  categories = ['LCV', 'Truk', 'Hyva', 'container', 'Tanker'];
  // lcv = false;
  // truck = false;
  // hyva = false;
  // container = false;
  // tanker = false;
  // trailer = false;
  trukvehiclenumber: any;
  trukcapacity: any;
  trukname: any;
  trukcurrentLocation: any;
  selectedItems: any;
  items: any = [];
  OpenTruck:any;

  trukdropLocation: any;
  trukpickupLocation: any;

  dropdownList: any[] = [];
  trukoperatingRoutes: any = [];
  dropdownSettings!: IDropdownSettings;

  constructor(private toastController: ToastController) { }

  ngOnInit() {

    //this.getAllvehicle()
    this.vehicleSearch()
  
    this.dropdownList = [
      'Mumbai',
      'Bangaluru',
      'Pune',
      'Navsari',
      'New Delhi'
    ];
    this.trukoperatingRoutes = [

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

  onCategoryChange(category: any) {
    console.log(category)

  }
  async presentToast(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'all LCV vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });

    await toast.present();
  }
  async all(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'All Vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }

  async opentruk(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'All openTruk vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }
  async hyva(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'all hyva vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }
  async container(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'All container Vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }
  async tanker(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'All Tanker Vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }
  async trailer(position:  'middle') {
    const toast = await this.toastController.create({
      message: 'All Trailer Vehicles!',
      duration: 500,
      position: position,
      color:'warning'
    });
    await toast.present();
  }

  toggle(trukname: any) {
    console.log(trukname)
    this.filter = trukname
    this.get()
    console.log(trukname)
  }


  getAllvehicle() {
    fetch("http://localhost:3000/addTruk/allVehicles", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Load
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }

  get() {
    console.log(this.trukdropLocation)
    console.log(this.trukpickupLocation)
    
    console.log(this.filter)
    fetch("http://localhost:3000/addTruk/filterByVehicle/" + this.filter + "/" + this.trukpickupLocation + "/" + this.trukdropLocation, {
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
  //vehileSearch based on routes
  vehicleSearch() {
    var data = {
      trukdropLocation: this.trukdropLocation,
      trukpickupLocation: this.trukpickupLocation
    }

    fetch("http://localhost:3000/addTruk/vehicleSearch", {
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
          this.items = result.doc
        // this.testForms.reset();

      }

      ).catch(err =>
        console.log(err))

  }



  SendData(data:any){
    console.log(data)
    localStorage.setItem("selectedTruk", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }
  AttachNewLoad(data:any){
    console.log(data)
    localStorage.setItem("AttachNewLoad", JSON.stringify(data));
  }


}
