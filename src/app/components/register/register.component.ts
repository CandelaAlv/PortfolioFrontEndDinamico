import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
 
  constructor(private formBuilder: FormBuilder){

    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(6),Validators.maxLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }



ngOnInit(): void {


}


get Password(){
  return this.form.get("password");
}

get Mail(){
 return this.form.get("email");
}

get PasswordValid(){
  return this.Password?.touched && !this.Password?.valid;
}

get MailValid() {
  return false
}

onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Enviar formuario!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
  }

}

}