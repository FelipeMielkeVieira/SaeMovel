import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.component.html',
  styleUrls: ['./modal-area.component.css']
})
export class ModalAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { area: number }) { }

  ngOnInit(): void {
  }

  listaAutomoveis: any = [{ id: 1, modelo: 'Gol', preco: 10000 }, { id: 2, modelo: 'Palio', preco: 12000 }, { id: 3, modelo: 'Uno', preco: 8000 }];

  vender(idAutomovel: number) {
    alert('Vendido o automóvel de id: ' + idAutomovel);
  }
}
