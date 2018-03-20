import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa1',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {

  dados = [
    {produto: 'Sabão em pó', marca: 'Omo', valor: 'R$ 15,90'}
  ];
  cols = [
    { field: 'produto', header: 'Produto' },
    { field: 'marca', header: 'Marca' },
    { field: 'valor', header: 'Valor' }
  ];

  excluir() {
    alert('Excluindo...');
  }

  editar() {
    alert('Editando...');
  }
}
