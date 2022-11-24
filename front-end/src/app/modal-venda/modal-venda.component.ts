import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlocacaoService } from '../service/alocacaoService';
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
    private concessionariaService: ConcessionariaService,
    private alocacaoService: AlocacaoService
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

  isConfirmDisabled: boolean = true;
  cliente: any = 0;
  concessionaria: any = 0;

  onSelectUpdate() {
    if (this.cliente != 0 && this.concessionaria != 0) {
      this.isConfirmDisabled = false;
    }

    console.log("cliente", this.cliente)
    console.log("c", this.concessionaria)
  }

  buscarConcessionaria() {
    for (const con of this.listaConcessionaria) {
      if (con.id == this.concessionaria) {
        return con;
      }
    }
  }

  confirmSell() {
    console.log("a")
    let params: any = {};
    params.area = parseInt(this.data.area);
    params.concessionariaJson = JSON.stringify(this.buscarConcessionaria());
    params.automovelJson = JSON.stringify(this.data.automovel);
    this.alocacaoService.getByAreaAndConcessionariaAndAutomovel(params).subscribe(
      data => {
        data.quantidade--;
        this.alocacaoService.putAlocacao(data.id, data).subscribe(
          data => { console.log("Sucesso!") }
        )
      }
    );
  }
}
