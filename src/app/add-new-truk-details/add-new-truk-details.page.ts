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
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;
  vehiclenumber: any;
  currentLocation: any;
  capacity: any;
  Items: any;
  date: any;

  constructor() { }

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

}
