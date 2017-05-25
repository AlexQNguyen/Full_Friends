import { Component } from '@angular/core';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _friendService: FriendService){}
  friends = [];
  ngOnInit() {

    this._friendService.getAll()
    .then((friends) => {this.friends = friends})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }

}
