import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAreaComponent } from './modal-area/modal-area.component';
import { AlocacaoService } from './service/alocacaoService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutomovelService } from './service/automovelService';
import { ClienteService } from './service/clienteService';
import { ConcessionariaService } from './service/concessionariaService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private alocacaoService: AlocacaoService) { }

  visibleModalArea: boolean = false;
  listaPatios: any[] = []

  ngOnInit(): void {
    for (let i = 1; i < 13; i++) {
      this.alocacaoService.getDisposicao(i).subscribe(
        data => { this.listaPatios[i - 1] = data; }
      )
    }
  }

  openDialog(id: number) {
    if (this.listaPatios[id - 1]) {
      const dialogRef = this.dialog.open(ModalAreaComponent, { data: { area: id } });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      this.snackBar.open("Essa área não possui nenhuma alocação!", "Fechar")
    }
  }

  retornaClassePatio(index: number) {
    if (this.listaPatios[index - 1]) {
      return "azul";
    } else {
      return "naoAzul";
    }
  }
}
