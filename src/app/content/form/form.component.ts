import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  onSubmit(form: NgForm){
    if (form.invalid){
      return;
    }

    console.log(
      form.value.usrName,
      form.value.usrEmail,
      form.value.usrSubject,
      form.value.usrMsg
    );
    alert('Success!');
  }

  ngOnInit() {
  }

}
