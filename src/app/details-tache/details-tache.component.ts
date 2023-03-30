import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from '../Model/Tache';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-details-tache',
  templateUrl: './details-tache.component.html',
  styleUrls: ['./details-tache.component.css']
})
export class DetailsTacheComponent {
  tache : Tache = new Tache() ;


  constructor(private tacheService: TacheService, private route: ActivatedRoute ){

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.tacheService.getTache(id).subscribe(
        response => {
          console.log(response);
          
          this.tache=response;
          

        },
        error => {
          console.log(error);
        }
      );

    

    });
  }

}
