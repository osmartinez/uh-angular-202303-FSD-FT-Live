import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosAcceso } from 'src/app/interfaces/datos-acceso';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private servicioUsuario: UsuarioService){
    this.loginForm = formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      clave: ['',[Validators.required, Validators.minLength(8)]],
    })
  }


  submit(){
    const datosLogin : DatosAcceso ={
      password: this.loginForm.get('clave')?.value,
      email: this.loginForm.get('email')?.value,
    }

    this.servicioUsuario.acceder(datosLogin).subscribe((resultado)=>{
      console.log(resultado)
      alert('Credenciales correctas!!')
    })

  }

}
