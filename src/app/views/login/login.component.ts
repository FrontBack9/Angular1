import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faArrowLeft = faArrowLeft

  userModel = new User()

  constructor() { }

  ngOnInit(): void {
  }

  capturarDados(){
    console.log(this.userModel);
  }

}

