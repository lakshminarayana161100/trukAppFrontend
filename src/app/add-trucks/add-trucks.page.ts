import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-add-trucks',
  templateUrl: './add-trucks.page.html',
  styleUrls: ['./add-trucks.page.scss'],
})
export class AddTrucksPage implements OnInit {
  toppings: any;
  data: any;
  dropdownList: any[] = [];
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;
  vehiclenumber: any;
  currentLocation: any;
  capacity: any;
  Items: any;
  date: any;



  constructor(private alertController: AlertController) { }

  ngOnInit() {

    this.dropdownList = [
      { item_text: 'Mumbai' },
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

  out(data: any) {
    console.log(data)

    this.data = data
    console.log(this.data)

  }

  async postVehile() {
    var body = {
      vehiclenumber: this.vehiclenumber,
      capacity: this.capacity,
      currentLocation: this.currentLocation,
      selectedItems: this.selectedItems,
      data: this.data,
      date: this.date
    }
    console.log()
    fetch("http://localhost:3000/addTruk/vehiclepost", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),

    })
      .then(response => response.json())
      .then(async result => {
        console.log(result)
        this.Items = result
        const alert = await this.alertController.create({
          header: 'Successfull',
          // subHeader: 'Important message',
          message: 'truk posted Successfully',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
                //you can write your code or redirection 
                // sample redirection code 
                window.location.href = '/your-truck-posted';

              }
            }
          ],
        });

        await alert.present();


      }

      ).catch(err =>
        console.log(err))
  }
}