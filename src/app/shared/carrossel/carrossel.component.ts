import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
})
export class CarrosselComponent implements OnInit, OnDestroy {
  intervalId!: any;
  isBrowser = signal(false);
  @Input({ required: true }) imagens: string[] = [];

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva(): number {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  ngOnDestroy(): void {
    this.pararCarrossel();
  }

  iniciarCarrossel(): void {
    if (this.isBrowser()) {
      this.intervalId = setInterval(() => {
        this.ativarImagem(this.indexImagemAtiva + 1);
      }, 3000);
    }
  }

  pararCarrossel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
  }
}
