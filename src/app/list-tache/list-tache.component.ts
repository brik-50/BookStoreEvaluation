import { Component } from '@angular/core';
import { Tache } from '../Model/Tache';
import { TacheService } from '../tache.service';


@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent {
  
  listTaches: Tache[] = [];
  searchText: string ="";


  constructor(private tacheService: TacheService) {}

  ngOnInit() {
    this.tacheService.getTaches().subscribe(
      (response: Tache[]) => {
        this.listTaches = response;
        console.log(this.listTaches);
      },
      error => {
        console.log(error);
      }
    );
  }
  hundleChange(){
    console.log(this.searchText)
    this.tacheService.getTacheByStatus(this.searchText).subscribe(
      response => {
        console.log(response);
        this.listTaches=response;
      },
      error => {
        console.log(error);
      }
    );
  }

  Refresh(){
    this.tacheService.getTaches().subscribe(
      response => {
        this.listTaches = response;
        console.log(this.listTaches);
      },
      error => {
        console.log(error);
      }
    );

  }

  OnDelete(id : number){
    this.tacheService.removeTache(id).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );

  }




}
