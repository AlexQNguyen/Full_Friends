import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FriendService {

//this file talks directly to the routes.js file in your server
  constructor(private _http: Http) { }

//this function hits the /friends in routes.js
  getAll() {
    console.log("getAllService")
  	return this._http.get('/friends').map((friends) => friends.json()).toPromise();
  }

//this function hits the /newfriends in routes.js (friend) is the object you pass
//to the create contorller
  addFriend(friend) {
    console.log("addFriend Service", friend)
    return this._http.post('/newfriends', friend).map((friends) => friends.json()).toPromise();
  }
//this function hits the /friends/show/:id
  showFriend(id){
    console.log("showFriend Service", id)
    return this._http.get('/friend/show/' + id).map((friends)=> friends.json()).toPromise();
  }

//this function hits the /updatefriend/:id
//id is from params, friend is the object you are updating
  updateFriend(id, friend){
    console.log("Update Service", id)
    return this._http.post('/updatefriend/' + id, friend).map((friends)=> friends.json()).toPromise();

  }
//this function hits the /friend/destory/:id
  destroyFriend(id){
      console.log("Destory Service", id)
      return this._http.get('/friend/destroy/' + id).map((friends)=> friends.json()).toPromise();

  }

}
