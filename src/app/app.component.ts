import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LocalStoreService } from './services/local-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clothes-picker';
  isLoggedIn = false;
  user: SocialUser;

  constructor(
    private authService: AuthService,
    private storageService: LocalStoreService,
    private router: Router
  ){}
  
  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = true;
      this.user = user;
      this.storageService.setUser(user);
    });
  }

  signOut(): void {
    this.authService.signOut().then(()=>{
      this.router.navigateByUrl('/login');
    });
  }
}
