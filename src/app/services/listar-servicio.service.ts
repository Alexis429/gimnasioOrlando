import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ListarServicioService {
    urlUpdate='https://riditech-heroku-back.herokuapp.com/api/user/listUser';
    urlCreate='https://riditech-heroku-back.herokuapp.com/api/user/newUser'
    constructor(private http: HttpClient) { }

    listarConfiguracion(){
        return this.http.get(`${this.urlUpdate}`);
    }

    registrarUsuario(arreglousu:any){
      return this.http.post(`${this.urlCreate}`,{data: arreglousu})
      .pipe(map((res)=>{
      return arreglousu;
      }));
  }

}