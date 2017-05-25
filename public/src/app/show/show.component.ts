import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  friend = [];
  param = null;


//constructor, Service to talk to DB, ActivatedRoute for params
  constructor(private _friendService: FriendService, private _route: ActivatedRoute )
      {this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }

  ngOnInit() {
    console.log(this.param);
    this._friendService.showFriend(this.param)
    .then(friend => {this.friend = friend})
    .catch(err => console.log("this is an" , err));
  }

}
