import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private authService: SocialAuthService) {
    iconRegistry.addSvgIcon('login-fb', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-facebook.svg'));
    iconRegistry.addSvgIcon('login-gg', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-google-150.svg'));
    iconRegistry.addSvgIcon('login-tw', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/icons8-twitter.svg'));
  }

  ngOnInit(): void {
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

}
