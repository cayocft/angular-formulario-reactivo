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

  eliminarDosCampos(id_registroForm:any){
    
    this.servicioFormulario.eliminarDosCampos(id_registroForm).subscribe(
      (response:any) =>{
        if(response.registroForms.deletedCount > 0){
          alert("Registro eliminado");
          this.obtenerDatosDosCampos();
        }else{
          alert("No se ha podido eliminado el registro");
        }
      },
      error => {
        console.log(error)
        alert("hay errores");
      }
    );
  }



}
