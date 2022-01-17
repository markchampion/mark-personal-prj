import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mark-personal-prj';

  constructor(private renderer2: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }

  public ngOnInit(): void {
    // const script = this.renderer2.createElement('script');
    // script.async = undefined;
    // this.renderer2.appendChild(this.document.body, script);
  }
}
