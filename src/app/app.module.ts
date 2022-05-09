import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { ShowLibrosComponent } from './libros/show-libros/show-libros.component';
import { AddEditLibrosComponent } from './libros/add-edit-libros/add-edit-libros.component';
import { BibliotecaApiService } from './biblioteca-api.service';
//import { AutoresComponent } from './autores/autores.component';
import { AddEditAutoresComponent } from './autores/add-edit-autores/add-edit-autores.component';
//import { EditorialesComponent } from './editoriales/editoriales.component';
import { AddEditEditorialesComponent } from './editoriales/add-edit-editoriales/add-edit-editoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    ShowLibrosComponent,
    AddEditLibrosComponent,
    //AutoresComponent,
    AddEditAutoresComponent,
    //EditorialesComponent,
    AddEditEditorialesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [BibliotecaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
