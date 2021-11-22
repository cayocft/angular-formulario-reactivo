//Importando el cliente Htpp
import { HttpClient } from '@angular/common/http';
//FIN Importando el cliente Htpp
import { Injectable } from '@angular/core';
//Para ruta de nuestro backend
import { environment } from '../../environments/environment';
//FIN Para ruta de nuestro backend
@Injectable({
  providedIn: 'root'
})

export class FormularioService {
  url_backend = environment.url_backend+"/registroForm";
  constructor(private http:HttpClient) { }

  crear_datosFormulario(datosFormulario:any){
    //Ruta de nuestro backend a cual se le enviará los datos a registrar
    return this.http.post(`${this.url_backend}/crear-registro`,datosFormulario);
    
    //Esto imprimirá los datos recibidos desde nuestro formulario
    console.log(datosFormulario);
  }

  //Servicios que solicita y obtiene los datos registrados "Dos Campos"
  obtenerDosCampos(){
    return this.http.get(`${this.url_backend}/obtener-registros`);
  }

}





