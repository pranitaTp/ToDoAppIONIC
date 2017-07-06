import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import {ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

public items = [];

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public dataService:DataProvider) {
    this.dataService.getData().then((todos)=>
  {
    if(todos)
    {
      this.items=JSON.parse(todos);
    }
  });
  }

  ionViewDidLoad() {
  /*  this.items=[
    {title:'hi1',description:'test1'},
    {title:'hi2',description:'test2'},
    {title:'hi3',description:'test3'}
  ];*/
  }

  addItem()
  {
      let addModal=this.modalCtrl.create(AddItemPage);
      addModal.onDidDismiss((item)=>
      {
        if(item)
        {
          this.saveItem(item);
        }
      });
      addModal.present();
  }

  saveItem(item)
  {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item)
  {
    this.navCtrl.push(ItemDetailPage,
    {
      item:item
    });
  }

}
