import { Component, Inject } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-header-saude',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './header-saude.component.html',
  styleUrls: ['./header-saude.component.scss']
})
export class HeaderSaudeComponent {

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

// Componente de Dialog para o Modal
@Component({
  selector: 'app-doacao-dialog',
  template: `
    <h2 mat-dialog-title class="text-lg font-semibold text-center">Faça uma Doação</h2>
    <mat-dialog-content class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <!-- Coluna do Texto -->
      <div class="flex-1 text-center lg:text-left">
        <p class="mb-4">{{ data.instructions }}</p>
        <p><strong>Chave Pix:</strong> {{ data.detalhesDoacao.chavePix }}</p>
        <p><strong>Agência:</strong> {{ data.detalhesDoacao.agencia }}</p>
        <p><strong>Conta Corrente:</strong> {{ data.detalhesDoacao.conta }}</p>
        <p><strong>Nome:</strong> {{ data.detalhesDoacao.nome }}</p>
        <p><strong>CNPJ:</strong> {{ data.detalhesDoacao.cnpj }}</p>
      </div>

      <!-- Coluna da Imagem -->
      <div class="flex-1 flex justify-center">
        <img [src]="data.qrCodePath" alt="QR Code para doação" class="w-full max-w-sm h-auto rounded shadow-md" />
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-button mat-dialog-close class="text-green-600 hover:text-red-500">Fechar</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [CommonModule, MatDialogModule]
})
export class DoacaoDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      qrCodePath: string;
      instructions: string;
      detalhesDoacao: {
        chavePix: string;
        agencia: string;
        conta: string;
        nome: string;
        cnpj: string;
      };
    }
  ) {}
}
