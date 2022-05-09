import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaApiService {

  readonly bibliotecaAPIUrl = 'https://localhost:7176/api'
  constructor(private http: HttpClient) { }

  // Libros
  getLibrosList():Observable<any[]>{
    return this.http.get<any>(this.bibliotecaAPIUrl + '/Libros');
  }
  

  addLibros(data:any){
    return this.http.post(this.bibliotecaAPIUrl + '/Libros',data)
  }

  // updateLibros(id:number|string, data:any){
  //   return this.http.put<(this.bibliotecaAPIUrl + `/Libros/${id}`,data);
  // }
  updateLibros(id:number|string, data:any):Observable<Response> {
    
    return this.http.put<Response>(this.bibliotecaAPIUrl + `/Libros/${id}`,data);
  }

  deleteLibros(id:number|string){
    return this.http.delete(this.bibliotecaAPIUrl + `/Libros/${id}`);
  }

  // Autores
  getAutoresList():Observable<any[]>{
    return this.http.get<any>(this.bibliotecaAPIUrl + '/Autores');
  }

  addAutores(data:any):Observable<Response>{        
    return this.http.post<Response>(this.bibliotecaAPIUrl + '/Autores',data);
  }

  updateAutores(id:number|string, data:any){
    return this.http.put(this.bibliotecaAPIUrl + `/Autores/${id}`,data);
  }

  deleteAutores(id:number|string){
    return this.http.delete(this.bibliotecaAPIUrl + `/Autores/${id}`);
  }

  // Editoriales
  getEditorialesList():Observable<any[]>{
    return this.http.get<any>(this.bibliotecaAPIUrl + '/Editoriales');
  }

  getEditorialId(id:number|string):Observable<any>{
    console.log(id);
    return this.http.get<any>(this.bibliotecaAPIUrl + `/Editoriales/${id}`);
  }

  addEditoriales(data:any){
    return this.http.post(this.bibliotecaAPIUrl + '/Editoriales',data)
  }

  updateEditoriales(id:number|string, data:any){
    return this.http.put(this.bibliotecaAPIUrl + `/Editoriales/${id}`,data);
  }

  deleteEditoriales(id:number|string){
    return this.http.delete(this.bibliotecaAPIUrl + `/Editoriales/${id}`);
  }
}
