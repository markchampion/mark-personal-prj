import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import * as SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stompClient: any;
  form: FormGroup;

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private authService: SocialAuthService) {
    iconRegistry.addSvgIcon('login-fb', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-facebook.svg'));
    iconRegistry.addSvgIcon('login-gg', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-google-150.svg'));
    iconRegistry.addSvgIcon('login-tw', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-twitter.svg'));
  }

  username: string;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  _connect() {
    console.log('Initialize WebSocket Connection');
    const ws = new SockJS('http://localhost:8080/notify-websocket');
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({username: this.username}, (frame) => {
      this.stompClient.subscribe('/user/notify/task', (sdkEvent) => {
        console.log('response here: ' + sdkEvent);
      });
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      res => {
        console.log(res);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  setValue(event): void {
    this.username = event.target.value;
  }
}
