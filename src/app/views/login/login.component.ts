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
  nomeProfessor:any = ""
  mensagem: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  mostrarNome(){
    this.nomeProfessor = this.userModel.nome;
  }

  validaLogin():boolean{
    if(this.userModel.nome === undefined || this.userModel.nome === '' ||
      this.userModel.email === undefined || this.userModel.email === '' ||
      this.userModel.password === undefined || this.userModel.password === '' 
      ){

      // console.log(this.userModel);
      return false;
    } else{
      return true;
  }
}

  //Função do login

  signin(){
    
    //Fazer validação
    if(this.validaLogin()){

      console.log(this.userModel);

      this.userService.sigin(this.userModel)
      .subscribe(
        {
          next: (response)=>{
            console.log(response);
            this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`
      
          },
          error: (e)=>{
            console.log('Deu ruim',e);
            // console.clear()
            this.mensagem = `${e.error} ${e.status} ${e.statusText}`
      
          } 
        }
      )

      console.log(this.userModel);
      this.mensagem = "Preencher todos os campos"
    

    } else{//Falta preencher campos
      console.log(this.userModel);
      this.mensagem = "Preencher todos os campos"

    }
     
    } 

  } //Fim da Classe



// Nova forma de utilizar o subscribe segundo a bilbioteca rxJS
//https://rxjs.dev/deprecations/subscribe-arguments
//   subscribe({
//     next: (v) => console.log(v),
//     error: (e) => console.error(e),
//     complete: () => console.info('complete') 
// })
      //Arrow Functions
      // (response)=>{
      // console.log(response);
      // this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`

    // })
 
  // }

// (params)=> {

//} 
