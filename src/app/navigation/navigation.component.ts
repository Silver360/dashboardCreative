import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    private social = {
        likes: '384 Polubień',
        followers: '3000 Śledzących',
    };

    constructor() {

    }

    ngOnInit() {

    }

}
