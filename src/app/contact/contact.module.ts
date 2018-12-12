import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FaqComponent } from './faq/faq.component';
import { ContactRoutingModule } from './contact.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    FaqComponent
  ]
})
export class ContactModule { }
