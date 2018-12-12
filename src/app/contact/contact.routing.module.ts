import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: ContactComponent, children: [
     { path: 'faq', component: FaqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
