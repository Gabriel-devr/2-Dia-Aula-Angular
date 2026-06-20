import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-criar-conta',
  imports: [ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './criar-conta.html',
  styleUrl: './criar-conta.css',
})
export class CriarConta {
  private fb = inject(FormBuilder)

  formCadastro: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    confirmarSenha: ['', Validators.required]
  })

  registrar() {
    if (this.formCadastro.valid) {
      if (this.formCadastro.value.senha !== this.formCadastro.value.confirmarSenha) {
        alert('As senhas não coinciddem!');
      }
      console.log('Conta criada com sucesso!', this.formCadastro.value);
      return;
    }
    else {
      console.log('Por favor, preencha o formulário corretamente!!!')
    }
  }
}
