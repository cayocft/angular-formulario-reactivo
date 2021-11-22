import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-mostrar-dos-campos',
  templateUrl: './mostrar-dos-campos.component.html',
  styleUrls: ['./mostrar-dos-campos.component.css']
})
export class MostrarDosCamposComponent implements OnInit {

  datos_formulario:any;

  constructor(private servicioFormulario: FormularioService) { }

  ngOnInit(): void {
    this.obtenerDatosDosCampos();
  }

  obtenerDatosDosCampos(){
    this.servicioFormulario.obtenerDosCampos().subscribe(
      (response:any) => {
        this.datos_formulario = response.registros;
        console.log(this.datos_formulario)
      },
      error => {
        alert("hay errores");
      }        
    );
  }

}
