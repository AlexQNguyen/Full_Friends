import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  friend = new Friend();

//talks to services and the form in the new.html
  onSubmit(friend){
    console.log(this.friend);
    this._friendService.addFriend(this.friend)
    .then(newFriend => {this.friend = newFriend, this.goBack()})
    .catch(err => console.log(err));

  }

  goBack(){
  this._route.navigate(["/"])
  }
//constructor, Service to talk to DB, Router for redirect
  constructor(private _friendService: FriendService, private _route:Router) { }

  ngOnInit() {
  }

}
