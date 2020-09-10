import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  createRoomForm: FormGroup;
  nickname = '';
  ref = firebase.database().ref('users/');
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('nickname')) {
      this.router.navigate(['/roomlist']);
    }
    this.createRoomForm = this.formBuilder.group({
      'nickname' : [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    const createRoom = form;
    this.ref.orderByChild('nickname').equalTo(createRoom.nickname).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('nickname', createRoom.nickname);
        this.router.navigate(['/roomlist']);
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(createRoom);
        localStorage.setItem('nickname', createRoom.nickname);
        this.router.navigate(['/roomlist']);
      }
    });
  }

}
