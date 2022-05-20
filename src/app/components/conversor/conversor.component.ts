import { ConvertService } from './../../services/convert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  monedas!: Array<any>;
  datos!: Array<any>;
  actual!: string;
  posterior!: string;
  montoI!: number;
  montoP!: number;
  montoPI!: number;

  constructor(private conversorService: ConvertService) {
    this.actual = 'ARS';
    this.posterior = 'ARS';
    this.montoI = 1;
    this.montoP = 1;
    this.montoPI = 1;
    this.monedas = [
      {
        detalle: 'Dólares - EEUU',
        nombre: 'USD',
        icono: '../assets/icons/usd.png',
      },
      {
        detalle: 'Éuros - Europa',
        nombre: 'EUR',
        icono: '../assets/icons/eur.png',
      },
      {
        detalle: 'Lira Esterlina - Gran Bretaña',
        nombre: 'GBP',
        icono: '../assets/icons/gbp.png',
      },
      {
        detalle: 'Yenes - Japón',
        nombre: 'JPY',
        icono: '../assets/icons/jpy.png',
      },
      {
        detalle: 'Yuán - China',
        nombre: 'CNY',
        icono: '../assets/icons/cny.png',
      },
      {
        detalle: 'Australiano - Australia',
        nombre: 'AUD',
        icono: '../assets/icons/aud.png',
      },
      {
        detalle: 'Bitcoin',
        nombre: 'BTC',
        icono: '../assets/icons/btc.png',
      },
      {
        detalle: 'Peso Argentino - Argentina',
        nombre: 'ARS',
        icono: '../assets/icons/ars.png',
      },
    ];
    //Datos de la tabla
    //* ignorar
    this.datos = [
      {
        icono: '../assets/icons/usd.png',
        nombre: 'USD',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: '../assets/icons/eur.png',
        nombre: 'EUR',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: '../assets/icons/gbp.png',
        nombre: 'GBP',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: '../assets/icons/rub.png',
        nombre: 'RUB',
        valor: {
          directo: [],
          inverso: [],
        },
      },
    ];
  }

  ngOnInit(): void {
    this.convertirMonedasTabla();
  }

  convertirModena(tengo: string, quiero: string, monto: number) {
    this.conversorService.getCurrecy(tengo, quiero, monto).subscribe((res) => {
      this.montoP = res.new_amount;
    });
  }

  convertirMonedasTabla() {
    for (let e = 0; e < this.datos.length; e++) {
      let i = 0;
      let timeID = setInterval(() => {
        this.conversorService
          .getCurrecy(this.datos[e].nombre, this.monedas[i].nombre, 1)
          .subscribe((res) => {
            this.datos[e].valor.directo.push(Number.parseFloat(res.new_amount));
          });
        i++;
        if (i >= this.monedas.length) clearInterval(timeID);
      }, 300);
    }

    for (let e = 0; e < this.datos.length; e++) {
      let i = 0;
      let timeID = setInterval(() => {
        this.conversorService
          .getCurrecy(this.monedas[i].nombre, this.datos[e].nombre, 1)
          .subscribe((res) => {
            this.datos[e].valor.inverso.push(Number.parseFloat(res.new_amount));
          });
        i++;
        if (i >= this.monedas.length) clearInterval(timeID);
      }, 300);
    }
  }
}
