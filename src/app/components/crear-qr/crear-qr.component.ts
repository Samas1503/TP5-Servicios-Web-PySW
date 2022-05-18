import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QrGeneratorService } from 'src/app/services/qr-generator.service';

@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.component.html',
  styleUrls: ['./crear-qr.component.css'],
})
export class CrearQRComponent implements OnInit {

  url!: string;
  resultado!:string
  qr!: SafeHtml;
  
  constructor(private qrGenerateService: QrGeneratorService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

   generarQR(url: string) {
    this.qrGenerateService.getQr(url).subscribe( (res) => {
      this.qr = this.sanitizer.bypassSecurityTrustHtml(res.result);
    });
  }
}
