import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBookComponent } from './details-book/details-book.component';
import { FormBookComponent } from './form-book/form-book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
     {
      path :'',
      redirectTo: 'list',
      pathMatch:'full'

     },
     {
      path :'list',
      component : ListBookComponent

     },
     {
      path :'form',
      component : FormBookComponent
     },
     {
      path :'form/:id',
      component : FormBookComponent
     },
     {
      path :'detail/:id',
      component : DetailsBookComponent
     }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
