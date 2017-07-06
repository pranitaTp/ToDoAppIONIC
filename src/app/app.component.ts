import { Component, ViewChild } from '@angular/core';
import { Platform,MenuController,Nav} from 'ionic-angular';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;


  constructor(platform: Platform, public menu:MenuController) {


    platform.ready().then(()=>
  {
  //  StatusBar.styleDefault;
  });

    }




}
