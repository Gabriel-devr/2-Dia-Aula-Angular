import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categorias = [
    { id: 1, nome: 'Todos', icone: '🍽️', ativo: true },
    { id: 2, nome: 'Sobremesas', icone: '🍰', ativo: false },
    { id: 3, nome: 'Lanches', icone: '🍔', ativo: false },
    { id: 4, nome: 'Bebidas', icone: '🥤', ativo: false }
  ];

  produtos = [
    {
      id: 1,
      nome: 'Cupcakes Coloridos',
      descricao: 'Mix de cupcakes com sabores variados e cobertura cremosa',
      tempo: '15-20 min',
      preco: '$5.99',
      avaliacao: '4.9',
      imagem: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      nome: 'Doces Finos Premium',
      descricao: 'Seleção de doces finos artesanais com ingredientes nobres',
      tempo: '10-15 min',
      preco: '$3.99',
      avaliacao: '4.7',
      imagem: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop'
    }
  ];
}
