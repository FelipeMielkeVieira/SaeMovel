import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlocacaoService } from './service/alocacaoService';
import { AutomovelService } from './service/automovelService';
import { ClienteService } from './service/clienteService';
import { ConcessionariaService } from './service/concessionariaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
}
