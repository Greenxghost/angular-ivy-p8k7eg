import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Post} from "../interfaces/post.interface"

@Component({
    selector: 'app-badnews-pusher',
    templateUrl: './badnews-pusher.component.html',
    styleUrls: ['./badnews-pusher.component.scss']

})
export class BadnewsPusherComponent implements OnInit {

    products: Post[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {

        this.dataService.sendGetRequest().subscribe((data: Post[]) => {
            this.products = data;
        })
    }


}
