import { TranstaleService } from './../../services/transtale.service';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  textoTraducido!: string;
  texto!: string;
  source!: string;
  target!: string;

  constructor(private traductor: TranstaleService) {
  }

  ngOnInit(): void {
  }

  cambiarSource(source: string) {
    this.source = source;
  }

  cambiarTarget(target: string) {
    this.target = target;
  }

  cambiarTexto(texto: string) {
    this.texto = texto;
  }

  async traducir(source: string, target:string, texto:string) {
    (await this.traductor.translateText(source, target, texto)).subscribe(async (res) => {
      this.textoTraducido = await res.data.translations.translatedText;
    });
  }

  copiar(texto: string) {
    navigator.clipboard.writeText(texto);
  }

}
