import { Filme } from './../shared/filmes.model';
import { Component, OnInit } from '@angular/core';
import { FilmesServices } from '../filmes.services';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
    FilmesServices
  ]
})
export class HomeComponent implements OnInit {

  public filme : any
  public filmes: any;
  
  closeResult: string = ""
  constructor(private filmesServices: FilmesServices, private modalService: NgbModal) {
    this.filmes = [];
   }
  ngOnInit() {

    // chama o metodo getfilmes 
    this.filmesServices.getFilmes()
    .then(filmes => {
      // variavel recebe dados dos filmes para fazer o data binding com o template
      this.filmes = filmes.results
      console.log(this.filmes) 
    }).catch((param:any)=>{
    })

    
  }
  
  //metodo para abrir o modal
  ver(filme: any, modal){
    this.filme = filme;
    this.modalService.open(modal,{ size: 'lg' } )
  }

 

}
