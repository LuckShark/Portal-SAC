import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../../services/navegacao.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DoacaoDialogComponent } from '../../../components/header-saude/header-saude.component';

@Component({
  selector: 'app-first-header',
  standalone: true,
  imports: [
        CommonModule,
        MatDialogModule
  ],
  templateUrl: './first-header.component.html',
  styleUrl: './first-header.component.scss'
})
export class FirstHeaderComponent {


 
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
