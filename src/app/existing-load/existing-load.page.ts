import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
declare var google: any;
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-existing-load',
  templateUrl: './existing-load.page.html',
  styleUrls: ['./existing-load.page.scss'],
})
export class ExistingLoadPage implements OnInit {

  Items: any = [];
  objects: any;
  real: any;
  truk: any;
  TrukPost: any;


  trukname:any;
  trukcurrentLocation:any;
  trukcapacity:any;
  trukoperatingRoutes:any;
  trukdate:any;
  trukvehiclenumber:any;
  router: any;
  trukOwnerNumber:any;


  
  constructor(private alertController: AlertController, router:Router) {  }
  ngOnInit(): void {
    this.objects = localStorage.getItem("selectedTruk");  //use the localstorage we getdata from savedData
    //The localStorage object allows you to save key/value pairs in the browser.
    this.real = JSON.parse(this.objects)  //parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

    console.log(this.objects)

    this.truk = localStorage.getItem("attachload");  //use the localstorage we getdata from savedData
    //The localStorage object allows you to save key/value pairs in the browser.
    this.TrukPost = JSON.parse(this.truk)  //parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

    console.log(this.truk)
  }

  async SendExistingload() {
    var data = {

      trukname:this.real.trukname,
      trukcurrentLocation:this.real.trukcurrentLocation,
      trukcapacity:this.real.trukcapacity,
      trukdate:this.real.trukdate,
      trukoperatingRoutes:this.real.trukoperatingRoutes,
      trukOwnerNumber:this.real.trukOwnerNumber,
      //this is addTruckMarketVehicleToLoad ID we have to make this dynamic
      _id:this.TrukPost._id
    }
    console.log(data)
    localStorage.setItem("newpostAdd", JSON.stringify(data));

    fetch("http://localhost:3000/quotes/addTruckMarketVehicleToLoad", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),

    })
      .then(response => response.json())
      .then(async result => {
        console.log(result),
          this.Items = result
          
          const alert = await this.alertController.create({
            header: 'Successfully',
            // subHeader: 'Important message',
           // message: 'truk  Successfully',
            buttons: [
              {
                text: 'Okay',
                handler: () => {
                  console.log('Confirm Okay');
                  //you can write your code or redirection 
                  // sample redirection code 
                  // window.location.href = '/tab5';
                  localStorage.removeItem('selectedTruk');
                  localStorage.removeItem('attachload');

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
