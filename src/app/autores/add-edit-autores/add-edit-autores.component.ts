import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibliotecaApiService } from 'src/app/biblioteca-api.service';

@Component({
  selector: 'app-add-edit-autores',
  templateUrl: './add-edit-autores.component.html',
  styleUrls: ['./add-edit-autores.component.css']
})
export class AddEditAutoresComponent implements OnInit {

  constructor(private service: BibliotecaApiService) { }

  @Input() autores:any;
  id: number = 0;
  nombre: string = "";
  fechaNacimiento: Date = new Date();
  ciudad: string = "";
  email: string = "";

  ngOnInit(): void {
    // this.id = this.autores.id;
    // this.nombre = this.autores.nombre;
    // this.fechaNacimiento = this.autores.fechaNacimiento;
    // this.ciudad = this.autores.ciudad;
    // this.email = this.autores.email;
  }

  addautor(){
    var autor = {
      nombre : this.nombre,
      fechaNacimiento  : this.fechaNacimiento,
      ciudad : this.ciudad,
      email : this.email,
    }
    this.service.addAutores(autor).subscribe((res: any) => {
      var closeModalBtn = document.getElementById("add-edit-modal-autor-close");
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
    this.fechaNacimiento = new Date();
    this.ciudad = '';
    this.email = '';
  }

}
