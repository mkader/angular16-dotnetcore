import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { AlertComponent } from './_components/alert.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-root', templateUrl: 'app.component.html',
    standalone: true,
    imports: [NgClass, NgIf, RouterLink, RouterLinkActive, RouterOutlet, AlertComponent]
})
export class AppComponent {
    Role = Role;
    account?: Account | null;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }
}