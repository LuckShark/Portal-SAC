import { DoacaoDialogComponent } from './../header-saude/header-saude.component';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavegacaoService } from '../../services/navegacao.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-header-social',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './header-social.component.html',
  styleUrl: './header-social.component.scss'
})
export class HeaderSocialComponent {

 isMenuOpen = false;

  constructor(private navegacaoService: NavegacaoService, private dialog: MatDialog) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

  openDoacaoModal() {
    this.dialog.open(DoacaoDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        qrCodePath: 'assets/img/doacao.png',
        instructions: 'Por favor, utilize as informações abaixo para realizar sua doação:',
        detalhesDoacao: {
          chavePix: '07.018.138/0001-67',
          agencia: '2937-8',
          conta: '119980-3',
          nome: 'Sociedade de Assistência aos Cegos',
          cnpj: '07.018.138/0001-67'
        }
      }
    });
  }

}


