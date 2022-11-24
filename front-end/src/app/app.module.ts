import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalAreaComponent } from './modal-area/modal-area.component';
import { ModalVendaComponent } from './modal-venda/modal-venda.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTableModule } from '@angular/material/table';
import { AlocacaoService } from './service/alocacaoService';
import { AutomovelService } from './service/automovelService';
import { ClienteService } from './service/clienteService';
import { ConcessionariaService } from './service/concessionariaService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalAlerta } from './modal-alerta/modal-alerta';

@NgModule({
  declarations: [
    AppComponent,
    ModalAreaComponent,
    ModalVendaComponent,
    ModalAlerta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [AlocacaoService, AutomovelService, ClienteService, ConcessionariaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
