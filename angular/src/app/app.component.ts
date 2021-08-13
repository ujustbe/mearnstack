import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  homeRoute='home';       //use for home page content only show
  settingsRoute='settings'; ////use for setting page content only show
}
