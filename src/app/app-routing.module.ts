import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contact-us',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loginotp',
    loadChildren: () => import('./loginotp/loginotp.module').then( m => m.LoginotpPageModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () => import('./verifyotp/verifyotp.module').then( m => m.VerifyotpPageModule)
  },

  {
    path: 'selectlanguage',
    loadChildren: () => import('./selectlanguage/selectlanguage.module').then( m => m.SelectlanguagePageModule)
  },
  {
    path: 'selecttype',
    loadChildren: () => import('./selecttype/selecttype.module').then( m => m.SelecttypePageModule)
  },
  {
    path: 'personorcompanydetails',
    loadChildren: () => import('./personorcompanydetails/personorcompanydetails.module').then( m => m.PersonorcompanydetailsPageModule)
  },
  {
    path: 'loadingscreen',
    loadChildren: () => import('./loadingscreen/loadingscreen.module').then( m => m.LoadingscreenPageModule)
  },
  {
    path: 'aleart-modal',
    loadChildren: () => import('./aleart-modal/aleart-modal.module').then( m => m.AleartModalPageModule)
  },
  {
    path: 'attach-new-load',
    loadChildren: () => import('./attach-new-load/attach-new-load.module').then( m => m.AttachNewLoadPageModule)
  },
  {
    path: 'add-trucks',
    loadChildren: () => import('./add-trucks/add-trucks.module').then( m => m.AddTrucksPageModule)
  },
  {
    path: 'your-truck-posted',
    loadChildren: () => import('./your-truck-posted/your-truck-posted.module').then( m => m.YourTruckPostedPageModule)
  },
  {
    path: 'truk-edit-page',
    loadChildren: () => import('./truk-edit-page/truk-edit-page.module').then( m => m.TrukEditPagePageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'add-new-truk',
    loadChildren: () => import('./add-new-truk/add-new-truk.module').then( m => m.AddNewTrukPageModule)
  },
  {
    path: 'add-new-truk-details',
    loadChildren: () => import('./add-new-truk-details/add-new-truk-details.module').then( m => m.AddNewTrukDetailsPageModule)
  },
  {
    path: 'chat-app',
    loadChildren: () => import('./chat-app/chat-app.module').then( m => m.ChatAppPageModule)
  },
  {
    path: 'attach-load',
    loadChildren: () => import('./attach-load/attach-load.module').then( m => m.AttachLoadPageModule)
  },
  {
    path: 'existing-load',
    loadChildren: () => import('./existing-load/existing-load.module').then( m => m.ExistingLoadPageModule)
  },
  {
    path: 'help-and-guide',
    loadChildren: () => import('./help-and-guide/help-and-guide.module').then( m => m.HelpAndGuidePageModule)
  },
  {
    path: 'star-staring',
    loadChildren: () => import('./star-staring/star-staring.module').then( m => m.StarStaringPageModule)
  },
  {
    path: 'your-earnings',
    loadChildren: () => import('./your-earnings/your-earnings.module').then( m => m.YourEarningsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'modal-contact',
    loadChildren: () => import('./modal-contact/modal-contact.module').then( m => m.ModalContactPageModule)
  },
  {
    path: 'contact-faq',
    loadChildren: () => import('./contact-faq/contact-faq.module').then( m => m.ContactFAQPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
