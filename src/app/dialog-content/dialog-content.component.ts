import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../model/model';//مدلی که ساخیتم
import { MatDialogRef } from '@angular/material/dialog';//قواعد گرفتن اطلاعات
@Component({
  selector: 'app-dialog-content',
  // standalone: true,
  // imports: [],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.css',




})
export class DialogContentComponent {
  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) { }//گرفتن اطلاعات از اپ کامپونت

contact: Contact = { firstName: '', lastName: '', phoneNumber:'0' , description: '' };

submit() {

  if (this.contact.firstName && this.contact.lastName && this.contact.phoneNumber && this.contact.description) {
    this.dialogRef.close(this.contact); // ارسال اطلاعات به کامپوننت والد
  } else {
    alert('لطفاً تمام فیلدها را پر کنید.');
  }

  // this.dialogRef.close(this.contact); // Close the dialog and send the contact data back

}

}
