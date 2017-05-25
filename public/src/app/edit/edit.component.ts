import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Friend } from '../friend';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  friend;
  param = null;
//talks to services and the from in the edit.html
  onSubmit(){
    console.log("on submit", this.friend);
    console.log("Ppppppppppt", this.param);
    this._friendService.updateFriend(this.param, this.friend)
    .then(newFriend => {this.friend = newFriend, this.goBack()})
    .catch(err => console.log(err));
  }

//Redirect function
  goBack(){
  this.router.navigate(["/dashboard"])
  }

//constructor, Service to talk to DB, ActivatedRoute for params, Router for redirect
  constructor(private _friendService: FriendService, private _route: ActivatedRoute, private router:Router )
      {this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }

//showFriend service initates when you click edit.html---> grabs the friend info
  ngOnInit() {
    console.log(this.param);
    this._friendService.showFriend(this.param)
    .then(friend => {this.friend = friend})
    .catch(err => console.log("this is an" , err));
  }

}
