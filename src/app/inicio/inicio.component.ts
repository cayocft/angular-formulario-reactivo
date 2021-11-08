import { Component, OnInit } from '@angular/core';
// Importamos componentes para formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //Declaramos una variable que capturará los datos del formulario
  formulario: any;

  //debemos instanciarlo en el constructor
  constructor(private fb:FormBuilder) { }

  //Inicializar formulario reactivo con sus reglas
  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(10)]],
      apellido:['',Validators.required]
    })
  }

  //obtener los las validaciones
  get formularioEjemplo(){
    return this.formulario.controls;
  }

  //Activación del boton cuando se validen los campos
  validarDatos(){
    console.log(this.formularioEjemplo);
  }

}
