import { DialogExampleComponent } from './../dialog-example/dialog-example.component'; // Correta importação
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatDialogModule,
    CommonModule
  ],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

  //DIALOG para quando clicar em "POPULAR"

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  mostrarMais: boolean = false;

  convenios = [
    {
      nome: 'Unimed',
      logo: 'assets/logos/logo-unimed.jpg',
      link: 'https://www.unimed.coop.br/site/fale-com-a-unimed'
    },
    {
      nome: 'Hapvida',
      logo: 'assets/logos/logo-hapvida.jpg',
      link: 'https://www.hapvida.com.br/site/central_de_ajuda'
    },
    {
      nome: 'Bradesco',
      logo: 'assets/logos/logo-bradesco.jpg',
      link: 'https://www.bradescoseguros.com.br/wps/portal/TransforDigital/BradescoSaude'
    },
    {
      nome: 'Amil',
      logo: 'assets/logos/amil.png',
      link: 'https://www.amil.com.br/institucional/#/market/planos'
    },
    {
      nome: 'Cassi',
      logo: 'assets/logos/cassi.png',
      link: 'https://www.cassi.com.br/'
    },
    {
      nome: 'Camed',
      logo: 'assets/logos/logo-camed.jpg',
      link: 'https://www.camed.com.br/fale-conosco'
    },
    {
      nome: 'Ambep',
      logo: 'assets/logos/ambep.png',
      link: 'https://ambep.com.br/plano-de-saude-ambep.php'
    },
    {
      nome: 'Blue',
      logo: 'assets/logos/blue.png',
      link: 'https://saudeblue.com/'
    },
    {
      nome: 'Cafaz',
      logo: 'assets/logos/cafaz.png',
      link: 'https://www.cafaz.org.br/'
    },
    {
      nome: 'Caixa',
      logo: 'assets/logos/caixa.png',
      link: 'https://centralsaudecaixa.com.br/'
    },
    {
      nome: 'Fachesf',
      logo: 'assets/logos/fachesf.png',
      link: 'https://www.fachesfsaude.com.br/'
    },
    {
      nome: 'Assefaz',
      logo: 'assets/logos/fund-assefaz.png',
      link: 'https://www.assefaz.org.br/'
    },
    {
      nome: 'Fusex',
      logo: 'assets/logos/fusex.png',
      link: 'https://www.fusex.com.br/'
    },
    {
      nome: 'Golden Cross',
      logo: 'assets/logos/golden-cross.png',
      link: 'https://www.goldencross.com.br/'
    },
    {
      nome: 'IPM',
      logo: 'assets/logos/ipm.png',
      link: 'https://www.ipm.br/'
    },
    {
      nome: 'ISSEC',
      logo: 'assets/logos/issec.png',
      link: 'https://www.issec.ce.gov.br/'
    },
    {
      nome: 'Petrobras',
      logo: 'assets/logos/petrobras.png',
      link: 'https://www.petrobras.com.br/'
    },
    {
      nome: 'Postal Saude',
      logo: 'assets/logos/Postal-saude.png',
      link: 'https://www.postalsaude.com.br/'
    },
    {
      nome: 'SUS',
      logo: 'assets/logos/sus.png',
      link: 'https://www.gov.br/saude/pt-br'
    },
    {
      nome: 'Popular',
      logo: 'assets/logos/particular.png',
      link: ''
    },
    // Adicione mais ...
  ];

  toggleMostrarMais() {
    this.mostrarMais = !this.mostrarMais;
  }
}
