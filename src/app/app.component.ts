import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";//متریال دیالوگ
import { DialogContentComponent } from "./dialog-content/dialog-content.component";
import { Contact } from "../model/model";//model



@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phonebook';

  constructor(private dialog: MatDialog) { }

  contacts:Contact[]=[
     { firstName: 'رضا', lastName: 'احمدی', phoneNumber: "0912878683", description: 'ثبت نام حضوری' },
    { firstName: 'منا', lastName: 'احمدی',  phoneNumber : "091287837"  , description: 'ثبت نام حضوری' },
    { firstName: 'رضوان', lastName: 'کریمی', phoneNumber: "08787477" , description: 'ثبت نام حضوری' }
  ]//تعریف یه آرایه خالی از جنس کانتکت


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contacts.push(result); // Add the result (form data) to the contacts array
      }
    });
  }



  removeContact(index: number ) {
    this.contacts.splice(index, 1); // حذف تماس با استفاده از ایندکس
  }


}


