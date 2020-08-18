import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalNotCadastroComponent } from '../modal-not-cadastro/modal-not-cadastro.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;
  getCadastro;
  message;
 
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dialog: MatDialog
  
    ) { }
  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['']
    });
  }

login(){
  this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
 var emailPersistido = this.getCadastro['email'];
  var emailDigitado = this.formLogin.get('email').value;
  if ((emailPersistido === emailDigitado)) {
    this.router.navigate(['home-logada']);
  } else {
    this.openDialog();
  }
}
   
  openDialog() {
    var dialogRef = this.dialog.open(ModalNotCadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

