import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

//talks to services and the from in the dashboard.html
  onDelete(id){
    this._friendService.destroyFriend(id)
    .then((friends)=> {this.friends = friends, this._route.navigate(["/"]) })
    .catch((err)=>{console.log("delete error")})
  }

//constructor, Service to talk to DB, Router for redirect
  constructor(private _friendService: FriendService, private _route:Router){}
  friends = [];

//when you intialize the Dashboard it will load all friends
  ngOnInit() {

    this._friendService.getAll()
    .then((friends) => {this.friends = friends})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }
}
