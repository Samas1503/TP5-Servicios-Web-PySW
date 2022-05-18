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
        nombre: 'usd',
        valor: {
          directo:[
            1.0, 0.919901, 0.811469, 108.9079, 7.057569, 1.619886, 0.00014,
            64.87725,
          ],
          inverso:[
            1.0, 1.087074, 1.232332, 0.009182, 0.141692, 0.617328, 7148.757,
            0.015414,
          ],
        },
      },
      {
        icono: '../assets/icons/eur.png',
        nombre: 'eur',
        valor: {
          directo:[
            1.087074, 1.0, 0.882127, 118.391, 7.6781, 1.760936, 0.000152,
            70.52637,
          ],
          inverso:[
            0.919901, 1.0, 1.133623, 0.008447, 0.130342, 0.56788, 6576.146,
            0.014179,
          ],
        },
      },
      {
        icono: '../assets/icons/gbp.png',
        nombre: 'gbp',
        valor: {
          directo:[
            1.232332, 1.133623, 1.0, 134.2108, 8.697272, 1.996238, 0.000172,
            79.95034,
          ],
          inverso:[
            0.811469, 0.882127, 1.0, 0.007451, 0.114979, 0.500942, 5800.997,
            0.012508,
          ],
        },
      },
      {
        icono: '../assets/icons/rub.png',
        nombre: 'rub',
        valor: {
          directo:[
            0.013226, 0.012166, 0.010732, 1.440365, 0.09334, 0.021424, 0.000002,
            0.858036,
          ],
          inverso:[
            75.61134, 82.19511, 93.1783, 0.694268, 10.71351, 46.67696, 540527.1,
            1.165452,
          ],
        },
      },
    ];
  }

  ngOnInit(): void {}

  convertirModena(tengo: string, quiero: string, monto: number) {
    this.conversorService.getCurrecy(tengo, quiero, monto).subscribe((res) => {
      this.montoP = res.new_amount;
    });
  }
}
