import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularauth';
  user: any;
  constructor(public auth:AuthService) {
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  };
}
