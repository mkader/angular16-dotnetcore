import { Component } from '@angular/core';

import { AccountService } from '@app/_services';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    templateUrl: 'details.component.html',
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class DetailsComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}