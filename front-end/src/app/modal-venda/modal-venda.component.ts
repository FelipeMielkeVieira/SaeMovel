import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../service/clienteService';
import { ConcessionariaService } from '../service/concessionariaService';

@Component({
  selector: 'app-modal-venda',
  templateUrl: './modal-venda.component.html',
  styleUrls: ['./modal-venda.component.css']
})
export class ModalVendaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private clienteService: ClienteService,
    private concessionariaService: ConcessionariaService
  ) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      data => { this.listaClientes = data }
    );

    let params: any = {};
    params.area = parseInt(this.data.area);
    params.automovelJson = JSON.stringify(this.data.automovel);
    this.concessionariaService.getByAreaAndAutomovel(params).subscribe(
      data => { this.listaConcessionaria = data; }
    )
  }

  listaClientes: any = [];
  listaConcessionaria: any = [];


}
