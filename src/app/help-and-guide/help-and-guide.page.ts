import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-and-guide',
  templateUrl: './help-and-guide.page.html',
  styleUrls: ['./help-and-guide.page.scss'],
})
export class HelpAndGuidePage implements OnInit {
  

  item: any = [];
  constructor() { }

  ngOnInit() {

    this.get()
  }
  


  get() {
    fetch("http://localhost:3000/help/alldata", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.help
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }
}
