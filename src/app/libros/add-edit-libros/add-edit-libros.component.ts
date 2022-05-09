import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibliotecaApiService } from 'src/app/biblioteca-api.service';

@Component({
  selector: 'app-add-edit-libros',
  templateUrl: './add-edit-libros.component.html',
  styleUrls: ['./add-edit-libros.component.css']
})
export class AddEditLibrosComponent implements OnInit {
  
  librosList$!:Observable<any[]>;
  autoresList$!:Observable<any[]>;
  editorialesList$!:Observable<any[]>;
  getEditorialId:any;
  maximoLibrosSuperado:string = "";
  limiteLibros:number = 0;

  constructor(private service: BibliotecaApiService) { }

  @Input() libros:any;
  id: number = 0;
  titulo: string = "";
  anio: number = 0;
  genero: string = "";
  paginas: number = 0;
  autorId!: number;
  editorialId!: number;

  ngOnInit(): void {
    this.id = this.libros.id;
    this.titulo = this.libros.titulo;
    this.anio = this.libros.anio;
    this.genero = this.libros.genero;
    this.paginas = this.libros.paginas;
    this.autorId = this.libros.autorId;
    this.editorialId = this.libros.editorialId;
    this.librosList$ = this.service.getLibrosList();
    this.autoresList$ = this.service.getAutoresList();
    
    this.editorialesList$ = this.service.getEditorialesList();

    this.maximoLibrosSuperado= "";
    //this.limiteLibros = this.validarLimiteLibros(6);
    //console.log("this.limiteLibros " + this.limiteLibros);
  }

  addlibro(){
    var libro = {
      titulo : this.titulo,
      anio  : this.anio,
      genero : this.genero,
      paginas : this.paginas,
      autorId : this.autorId,
      editorialId : this.editorialId,
    }

    //this.librosList$ = this.service.getLibrosList();
    // var librosList = this.librosList$;  
    // var countLibros:number = 0;
    // this.limiteLibros = this.validarLimiteLibros(this.editorialId);

    // librosList.subscribe(data =>{
    //   for(let i = 0; i< data.length; i++) 
    //   {
    //     if(data[i].editorialId == this.editorialId){
    //       countLibros += 1;
    //     }
    //   }      
    // });

    // console.log("countLibros " + countLibros)
    // console.log("this.limiteLibros " + this.limiteLibros)
    //if(this.limiteLibros >= countLibros){
      this.service.addLibros(libro).subscribe(res => {
        var closeModalBtn = document.getElementById("add-edit-modal-close");
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
        this.librosList$ = this.service.getLibrosList();
      })
    //}else{
      // this.maximoLibrosSuperado = "No es posible registrar el libro, se alcanzó el máximo permitido.";
      // var showDeleteSuccess = document.getElementById("add-success-alert");
      // if(showDeleteSuccess){
      //   showDeleteSuccess.style.display = "block";
      // }
      // setTimeout(function(){
      //   if(showDeleteSuccess){
      //     showDeleteSuccess.style.display = "none";
      //   }
      // },4000);
    //}

    
  }

  updatelibro(){
    var libro = {
      id : this.id,
      titulo : this.titulo,
      anio  : this.anio,
      genero : this.genero,
      paginas : this.paginas,
      autorId : this.autorId,
      editorialId : this.editorialId,
    }
    var id:number = this.id;  
    this.service.updateLibros(id,libro).subscribe((res: any) => {
      var closeModalBtn = document.getElementById("update-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showUpdateSuccess = document.getElementById("update-success-alert");
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }
      },4000);
    });
  }

  validarLimiteLibros(id:number){
    var respuesta = 0;
    console.log("getEditorialId");
    this.getEditorialId = this.service.getEditorialId(id).subscribe(data =>{
      console.log(data.id);
      console.log(data.nombre);
      // console.log(data.direccion);
      // console.log(data.telefono);
      // console.log(data.email);
      console.log(data.libros_registrados);
      respuesta = data.libros_registrados;
    });
    return respuesta;
  }
  
  

}
