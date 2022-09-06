import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  //Função do login

  signin(){
    // console.log(this.userModel);

    this.userService.sigin(this.userModel).subscribe(function(response){
      console.log(response);

    })
  }

}

