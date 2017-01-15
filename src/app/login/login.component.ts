import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./Login.component.css']
})
export class LoginComponent {
    public message: string;
    public user: string;
    @Output() public userChange = new EventEmitter();

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
            this.userChange.emit({user: this.user});
        }
    };

    public logout(): void {
        this.user = '';
        this.userChange.emit({user: this.user});
    };
}
