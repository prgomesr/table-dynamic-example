import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
