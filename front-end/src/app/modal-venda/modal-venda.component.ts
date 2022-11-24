import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../service/clienteService';

@Component({
  selector: 'app-modal-venda',
  templateUrl: './modal-venda.component.html',
  styleUrls: ['./modal-venda.component.css']
})
export class ModalVendaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      data => { this.listaClientes = data }
    );
  }
  
  listaClientes: any = [];
  listaConcessionaria: any = [{ id: 1, concessionaria: "Ado" }, { id: 2, concessionaria: "Ado2" }, { id: 3, concessionaria: "Ado3" }];

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

  confirmSell() {
    console.log("a")
  }
}
