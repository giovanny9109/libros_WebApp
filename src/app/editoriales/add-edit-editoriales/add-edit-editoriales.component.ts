import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibliotecaApiService } from 'src/app/biblioteca-api.service';

@Component({
  selector: 'app-add-edit-editoriales',
  templateUrl: './add-edit-editoriales.component.html',
  styleUrls: ['./add-edit-editoriales.component.css']
})
export class AddEditEditorialesComponent implements OnInit {

  constructor(private service: BibliotecaApiService) { }

  @Input() editoriales:any;
  id: number = 0;
  nombre: string = "";
  direccion: string = "";
  telefono: string = "";
  email: string = "";
  libros_registrados: number = -1;

  ngOnInit(): void {
    // this.id = this.editoriales.id;
    // this.nombre = this.editoriales.nombre;
    // this.direccion = this.editoriales.telefono;
    // this.telefono = this.editoriales.direccion;
    // this.email = this.editoriales.email;
    // this.libros_registrados = this.editoriales.libros_registrados;
  }

  addeditorial(){
    var editorial = {
      nombre : this.nombre,
      telefono  : this.telefono,
      direccion : this.direccion,
      email : this.email,
      libros_registrados : this.libros_registrados,
    }
    this.service.addEditoriales(editorial).subscribe((res: any) => {
      var closeModalBtn = document.getElementById("add-edit-modal-editorial-close");
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById("add-success-alert");
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      },4000);
    })
    this.id = 0;
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.email = '';
    this.libros_registrados = -1;
  }

}
