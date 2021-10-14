import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListarServicioService } from 'src/app/services/listar-servicio.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {


  crearusuario: any;

  constructor( private listarServicio : ListarServicioService ) {
    this.buscarLista();
   }

  ngOnInit(): void {
  }

  buscarLista(){
    this.listarServicio.listarConfiguracion().subscribe(rest => {
      console.log(rest);
    })
  }
  

  registrouser( name:any, email:any,
    password:any, edad:any,estado:any){
   /* this.crearusuario={
     name : name,
     email : email,
     password : password,
     edad : edad,
     estado :  estado
    }; 
 */  let body = 'name=name & email=email & password=password & edad=edad & estado=estado';
    this.listarServicio.registrarUsuario(body).subscribe(rest => {
      console.log(rest);
    })
    console.log('funcionando');
    console.log(body);

  }



}
