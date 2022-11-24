import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-venda',
  templateUrl: './modal-venda.component.html',
  styleUrls: ['./modal-venda.component.css']
})
export class ModalVendaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  listaClientes: any = [{id: 1, nome: "Kenzo"}, {id: 2, nome: "Rafael"}, ];


}
