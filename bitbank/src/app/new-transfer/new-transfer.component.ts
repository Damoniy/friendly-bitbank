import { Component } from '@angular/core';

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  value: number;
  receiver: number;

  transfer() {
    console.log('New transfer dispatched ', this.value, this.receiver)
  }
}
