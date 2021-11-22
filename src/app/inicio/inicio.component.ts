import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//agregar el servicio
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formulario:any;
  
  constructor(private fb:FormBuilder, private serviceFormulario: FormularioService) {  
  }
  ngOnInit(): void {
    this.formulario = this.fb.group({
      campo1:['',Validators.required],
      campo2:[''],
    })
    
  }

  get formularioReactivo() {
    return this.formulario.controls;
  }

  //Función que se activa con el botón del formulario
  enviarDatos(){
    //subscribe: es un Observavble, permite transmitir datos asincróna y sincrónica
    this.serviceFormulario.crear_datosFormulario(this.formulario.value).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("Datos guardados exitosamente");
          console.log(response)
        }else{
          alert("Datos no registrados")
        }
      },
      error=>{
        console.log(error)
        alert("error al registrar")
      }
    )
  }

}
