import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAreaComponent } from './modal-area/modal-area.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  constructor(public dialog: MatDialog) {}

  visibleModalArea: boolean = false;

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalAreaComponent, { data: { area: id } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
