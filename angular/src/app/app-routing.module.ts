import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsAboutComponent } from './settings-about/settings-about.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Route[] = [
  // {path: '', component: HomeComponent },   //using for default page component
  {path: '', redirectTo: '/home', pathMatch:'full' }, //using for default page with showing component in addressbar
  {path: 'home', component: HomeComponent },
  
  //children component in setting 
  {
    path: 'settings', 
    component: SettingsComponent,
    children: [
      // {path:'', redirectTo: 'profile', pathMatch:'full' },
      {path: 'profile', component: SettingsProfileComponent },
      {path: 'about', component: SettingsAboutComponent },
      {path:  '**', redirectTo: 'profile', pathMatch: 'full' }

    ]
  },

  {path: 'contact', component: ContactComponent},
  {path: '**' , component: PageNotFoundComponent}  //wildcard
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
