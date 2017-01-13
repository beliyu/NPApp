import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./Login.component.css']
})
export class LoginComponent {
   public message: string;
   public user: string;

    constructor() {
        this.message = '';
    };

public login(username: string, password: string): void {
    this.message = '';
    if (username !== 'admin' || password !== 'admin') {
        this.message = 'Incorrect credentials.';
        setTimeout(() => {
            this.message = '';
        }, 2500);
        } else {
            this.user = username;
    }
};

public logout(): void {
    this.user = '';
};
}
