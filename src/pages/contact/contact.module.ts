import {NgModule} from '@angular/core';
import {ContactPage} from "./contact";
import { IonicPageModule } from 'ionic-angular';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations:[ContactPage],
  imports:[
    IonicPageModule.forChild(ContactPage),ComponentsModule
  ]
})
export class ContactPageModule{};
