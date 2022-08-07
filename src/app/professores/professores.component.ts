import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { nome: 'André' },
    { nome: 'Norma' },
    { nome: 'Murilo' },
    { nome: 'Heitor' },
    { nome: 'Yasmin' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
