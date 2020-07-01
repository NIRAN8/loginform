import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `.logo {
      max-height: 30px;
      padding-bottom: 5px;
    }`
  ]
})
export class AppComponent  {

  subcriptions = ['Basic','Advanced','Pro'];
  selectedSubcriptions = 'Advanced';
  @ViewChild('check') loginForm : NgForm

  onLogin(){
    console.log(this.loginForm);
  }
}
