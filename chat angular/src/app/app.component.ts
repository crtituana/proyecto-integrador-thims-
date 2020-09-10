import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config ={
  apiKey: 'AIzaSyAB91T4wnOgMSzTmy3MoXkYAdtGAWE3FHY',
  databaseURL: 'https://thims-56de1.firebaseio.com'

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thims';

  constructor() {
    firebase.initializeApp(config);
  }
}
