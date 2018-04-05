import { Filme } from './shared/filmes.model';

import {Http} from '@angular/http'
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise'
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class FilmesServices {
    
    public url:string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1'
    constructor(private http: Http){}

        public getFilmes(){
           // Efetuar requisição http
           return this.http.get(this.url)
           .toPromise()
           .then((resposta: any)=> resposta.json())

        }

}