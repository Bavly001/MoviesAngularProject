import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() size: string = '200';
  @Input() borderColor: string = 'light';
  @Input() textColor: string = 'light';
  @Input() fontSize: string = '1';
  fontSizeNumber: number = 0;

  ngOnInit(): void {
    this.fontSizeNumber = parseInt(this.fontSize);
  }
}
