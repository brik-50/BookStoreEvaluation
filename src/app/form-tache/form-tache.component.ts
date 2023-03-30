import { Component } from '@angular/core';
import { TacheService } from '../tache.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Tache } from '../Model/Tache';

@Component({
  selector: 'app-form-tache',
  templateUrl: './form-tache.component.html',
  styleUrls: ['./form-tache.component.css']
})
export class FormTacheComponent {
  tache : Tache = new Tache() ;
  isAddMode = true; 

  constructor(private tacheService: TacheService, private route: ActivatedRoute ,private route_1 : Router) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
     if(id != undefined){
      this.tacheService.getTache(id).subscribe(
        response => {
          console.log(response);
          
          this.tache=response;
          

        },
        error => {
          console.log(error);
        }
      );


     }

    });
  }

  onSubmit(form: any) {

     if(form != null){
      this.isAddMode = false;
     }else{
      this.isAddMode = true;
     }



    this.tache!.description= form.description.value;
    this.tache!.status= form.status.value;

    
    this.tacheService.addTache(this.tache).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this.route_1.navigate(['/list'])
  }



  

}
