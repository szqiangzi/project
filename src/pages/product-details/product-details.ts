import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThemeableBrowser} from "ionic-native";

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem:any;
  imgs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem=this.navParams.get('item');
    if(this.selectedItem.SmallImages){
      this.imgs=this.selectedItem.SmallImages;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  };
  goBuy(){
    console.log("去抢购");
    console.log(this.selectedItem.ClickUrl);
    let options={
      statusbar:{color:"#f8285c"},
      toolbar:{height:44,color:"#f8285c"},
      title:{color:"#fff",showPageTitle:true},
      backButton:{
        image:"back",
        imagePressed:'back_pressed',
        align:'left',
        event:'backPressed'
      },
      backButtonCanClose:true
    };
    new ThemeableBrowser(this.selectedItem.ClickUrl,"_blank",options);
  }
}
