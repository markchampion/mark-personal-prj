import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {
  public tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Find the different color', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public navToGame(title: Tile): any {
    if (title.text === 'Find the different color') {
      this.router.navigate(['/game']);
    }
  }

}
