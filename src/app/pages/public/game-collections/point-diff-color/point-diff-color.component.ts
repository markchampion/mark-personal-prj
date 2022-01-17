import {Component, OnInit} from '@angular/core';
import {FacebookService, UIParams, UIResponse} from 'ngx-facebook';
import {InitialServiceService} from '../../../../services/initial-service.service';

export interface ItemBox {
  scaleLevel: number;
  color: string;
  standOutColor: string;
  totalBox: number;
}

@Component({
  selector: 'app-point-diff-color',
  templateUrl: './point-diff-color.component.html',
  styleUrls: ['./point-diff-color.component.css']
})
export class PointDiffColorComponent implements OnInit {

  public itemBox: ItemBox;
  public randomDif: number;

  constructor(private fb: FacebookService) {
  }

  ngOnInit(): void {
    this.initBoxes();
    this.share('');
  }

  private initBoxes(scaleLevel?): void {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    scaleLevel = scaleLevel || 2;
    this.itemBox = {
      scaleLevel,
      color: this.rgbToHex(r, g, b),
      standOutColor: this.standOutColor(r, g, b),
      totalBox: Math.pow(scaleLevel, 2)
    };
    console.log(this.itemBox);
    this.randomDif = Math.floor(Math.random() * (this.itemBox.totalBox));
  }

  public componentToHex(c): string {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  private rgbToHex(r, g, b): string {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  public standOutColor(r, g, c): string {
    const diffDistance = 30;
    const index = Math.floor(Math.random() * 3);
    const stack = [r, g, c];
    stack[index] -= stack[index] >= diffDistance ? diffDistance : -diffDistance;
    return this.rgbToHex(stack[0], stack[1], stack[2]);
  }

  public getWidth(value): string {
    return 100 / this.itemBox.scaleLevel + '%';
  }

  public moveOnOrNot(index): void {
    if (index === this.randomDif) {
      console.log('Got cha!!!');
      this.initBoxes(this.itemBox.scaleLevel + 1);
      console.log(this.randomDif);
    }
  }

  public share(url: string): void {

    const params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));

  }

}
