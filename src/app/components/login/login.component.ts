import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ingresoadmin : FormGroup;

  constructor( public formulario : FormBuilder, private route : Router) {

    usuario1 : ({
      usuarioadmin : 'orlando1',
      contrasenauser : 12345
    });

    this.ingresoadmin = this.formulario.group({
      usuario :[''],
      contrasena:['']
    })
   }

  ngOnInit(): void {
  }

  ingresaradmin() : any {
    console.log('verificando usuario');
    console.log(this.ingresoadmin.value);
    if(this.ingresoadmin.value.usuario == 'orlando1' && this.ingresoadmin.value.contrasena == 12345){
     console.log('usuario verificado' + ' . . . ' + this.ingresoadmin.value.usuario);
     this.route.navigate(['/admin']);
    }
  }

  verificado() : boolean{
    if(this.ingresoadmin.value.usuario == 'orlando1' && this.ingresoadmin.value.contrasena == 12345){
     return true;
    }
    return false;
  }

}
