import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  loginurl: any = "/login";
  
  formCadastro;
  valoresForms;
conversao;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }


  ngOnInit(): void {

    
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    console.log(this.valoresForms);
    this.formCadastro.valueChanges.pipe(debounceTime(1000)).subscribe(res => {
        console.log(res);
        this.valoresForms = res;
      });
  }
  cadastro() {
    console.log(this.formCadastro.controls);
    this.conversao = JSON.stringify(this.valoresForms);
    localStorage.setItem('cadastro', this.conversao);
    this.router.navigate(['/login']);
  
  }

}
