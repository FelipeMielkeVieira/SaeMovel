import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutomovelService } from '../service/automovelService';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.component.html',
  styleUrls: ['./modal-area.component.css']
})
export class ModalAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { area: number }, private automovelService: AutomovelService) { }

  ngOnInit(): void {
    this.automovelService.getByArea(this.data.area).subscribe(
      data => { this.listaAutomoveis = data; }
    );
  }

  formatPreco(valor: number) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  listaAutomoveis: any = [{ id: 1, modelo: 'Gol', preco: 10000 }, { id: 2, modelo: 'Palio', preco: 12000 }, { id: 3, modelo: 'Uno', preco: 8000 }];

  vender(idAutomovel: number) {
    alert('Vendido o automóvel de id: ' + idAutomovel);
  }
}
