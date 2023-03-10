import { Component } from '@angular/core';


import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: any = [];
  TurkActive: any;
  _id: any;
  trukvehiclenumber: any;
  trukcapacity: any;
  trukname: any;
  trukcurrentLocation: any;
  trukoperatingRoutes: any;
   trukisActive: any
  products: any;
  trukOwnerNumber: any;


  constructor() { }


  ngOnInit(): void {
    this.get()

    //this.trukmobilenumber()
  }
  get() {
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


  // ownerNumber(trukOwnerNumber: any) {
  //   this.TurkActive = trukOwnerNumber
  //   this.trukmobilenumber()
  //   console.log(trukOwnerNumber)
  // }


  // trukmobilenumber() {
  //   fetch("http://localhost:3000/addTruk/allVehicles/" + this.trukOwnerNumber, {
  //     method: 'GET',
  //     headers: {
  //       "access-Control-Allow-Origin": "*",

  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result),
  //         this.item = result.Load
  //       console.log(this.item)
  //     }

  //     ).catch(err =>
  //       console.log(err))
  // }



  SendData(data: any) {
    console.log(data)
    localStorage.setItem("TrukPosted", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }



  // Isactive Functionality
  isactive(Data: any) {
    console.log(Data._id)
    var data = {
      trukisActive: "Deactive"
    }
    // console.log(data)


    fetch("http://localhost:3000/addTruk/TrukDeactive/" + Data._id, {
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

          this.products = JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions


        //window.location.reload()  // reloading window

      }

      ).catch(err =>
        console.log(err))
  }

  deleteTruk(id: any) {
    fetch("http://localhost:3000/addTruk/deleteTruk/" + id, {
      method: 'DELETE',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'text/plain'

      },


    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.get()
       //this.trukmobilenumber()
      }

      ).catch(err =>
        console.log(err))

  }


  toggle(trukisActive: any) {
    this.TurkActive = trukisActive
    this.Truk()
    console.log(trukisActive)
  }

  Truk() {
    console.log(this.TurkActive)
    fetch("http://localhost:3000/addTruk/trukByStatus/" + this.TurkActive, {
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

  progress(){

  }

  complete(){

  }


}
