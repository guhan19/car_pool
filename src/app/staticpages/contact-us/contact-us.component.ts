import { Component } from '@angular/core';
declare const readDocument: any;
declare const saveDocument: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'my-editor-app';

  onChangeLoad(event: any) {
    readDocument(event);
  }

  onClickSave() {
    saveDocument();
  }
}
