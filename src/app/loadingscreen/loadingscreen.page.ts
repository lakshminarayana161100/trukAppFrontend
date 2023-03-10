import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.page.html',
  styleUrls: ['./loadingscreen.page.scss'],
})
export class LoadingscreenPage implements OnInit {

  constructor(public loadingCtrl:LoadingController ,public toastCtrl:ToastController,private router:Router) { }

  async ngOnInit() {
   await this.presentLoading()
   
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      
      message:'Please Wait..',
      spinner:"circular",
      duration:10000,
      
    })
   
    await loading.present()
  
    if(await this.loadingCtrl.dismiss()){
      this.router.navigate(['selectlanguage'])
    }
  }

}
