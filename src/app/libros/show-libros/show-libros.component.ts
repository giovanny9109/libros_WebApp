import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibliotecaApiService } from 'src/app/biblioteca-api.service';

@Component({
  selector: 'app-show-libros',
  templateUrl: './show-libros.component.html',
  styleUrls: ['./show-libros.component.css']
})
export class ShowLibrosComponent implements OnInit {

  librosList$!:Observable<any[]>;
  //librosTypesList$!:Observable<any[]>;
  autorList$!:Observable<any[]>;
  //librosTypesList:any=[];
  editorialesList$!:Observable<any[]>;
  autorList:any=[];
  editorialList:any=[];
  

  // Map to display data associate with foreign keys
  autorMap:Map<number,string> = new Map();
  editorialMap:Map<number,string> = new Map();

  constructor(private service: BibliotecaApiService) { }

  ngOnInit(): void {
    this.librosList$ = this.service.getLibrosList();
    this.autorList$ = this.service.getAutoresList();
    this.editorialesList$ = this.service.getEditorialesList();

    this.refreshAutoresMap();
    this.refreshEditorialesMap();    
  }
  
  // variables (properties)
  modalTitle: string = '';
  activateAddEditLibrosComponent:boolean = false;
  libros:any;
  autores:any;
  editoriales:any;

  modalAdd(){
    this.libros = {
      id: 0,
      titulo: null,
      anio: null,
      genero: null,
      paginas: null,
      autorId: null,
      editorialId: null,
    }
    this.modalTitle = 'Add Libros';
    this.activateAddEditLibrosComponent = true;
  }

  modalAddAutor(){
    this.autores = {
      id: 0,
      nombre : null,
      fechaNacimiento  : null,
      ciudad : null,
      email : null,
    }
    this.modalTitle = 'Add Autores';
  }

  modalAddEditorial(){
    this.editoriales = {
      id: 0,
      nombre : null,
      direccion  : null,
      telefono : null,
      email : null,
      libros_registrados : null,
    }
    this.modalTitle = 'Add Editoriales';
  }

  modalEdit(item:any){
    this.libros = item;
    this.modalTitle = 'Edit Libros';
    this.activateAddEditLibrosComponent = true;
  }

  delete(item:any){
    if(confirm(`Are you sure you want to delete libro ${item.id}?`)){
      
      this.service.deleteLibros(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById("delete-edit-modal-close");
        if(closeModalBtn){
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById("delete-success-alert");
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none";
          }
        },4000);
        this.librosList$ = this.service.getLibrosList();
      })
    }
  }

  modalClose() {
    this.activateAddEditLibrosComponent = false;
    this.librosList$ = this.service.getLibrosList();
  }
  modalCloseAutores() {
    this.activateAddEditLibrosComponent = false;
    this.librosList$ = this.service.getLibrosList();
    this.autorList$ = this.service.getAutoresList();
  }
  modalCloseEditoriales() {
    this.activateAddEditLibrosComponent = false;
    this.librosList$ = this.service.getLibrosList();
    this.autorList$ = this.service.getAutoresList();
    this.editorialesList$ = this.service.getEditorialesList();
  }

  refreshAutoresMap(){
    this.service.getAutoresList().subscribe(data =>{
      this.autorList = data;

      for(let i = 0; i< data.length; i++) 
      {
        this.autorMap.set(this.autorList[i].id, this.autorList[i].nombre
          //this.autorList[i].fechaNacimiento, this.autorList[i].ciudad, this.autorList[i].email
          );
      }
    });
  }

  refreshEditorialesMap(){
    this.service.getEditorialesList().subscribe(data =>{
      this.editorialList = data;

      for(let i = 0; i< data.length; i++) 
      {
        this.editorialMap.set(this.editorialList[i].id, this.editorialList[i].nombre
          //this.autorList[i].fechaNacimiento, this.autorList[i].ciudad, this.autorList[i].email
          );
      }
    });
  }

}
