import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

 saveRestaurant(restaurant){
   var saveRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
   console.log("Saving Restaurant", restaurant);
   return this.http.post<any>(saveRestaurantUrl,restaurant);
 }

 saveCharity(charity){
  var saveCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
  console.log("Saving Charity", charity);
  return this.http.post<any>(saveCharityUrl,charity);
}
saveDeliveryBoy(deliveryBoy){
  var saveDeliveryBoyUrl= "http://localhost:8080/api/v1/deliveryBoy-profile/";
  console.log("Saving DeliveryBoy", deliveryBoy);
  return this.http.post<any>(saveDeliveryBoyUrl,deliveryBoy);
 }
 updateRestaurantProfile(restaurant){
  var updateRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
  console.log("Updating Restaurant Profile", restaurant);
  return this.http.put<any>(updateRestaurantUrl,restaurant);
}

updateCharityProfile(charity){
  var updateCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
  console.log("Updating Charity Profile", charity);
  return this.http.put<any>(updateCharityUrl,charity);
}

updateDeliveryboyProfile(deliveryBoy){
  var updateDeliveryBoyUrl= "http://localhost:8080/api/v1/deliveryBoy-profile/";
  console.log("Updating DeliveryBoy Profile", deliveryBoy);
  return this.http.put<any>(updateDeliveryBoyUrl,deliveryBoy);
}
getRestaurantProfile(username){
  var url= `http://localhost:8080/api/v1/restaurant-profile/?username=${username}`;
  console.log("Fetching Restaurant With Username : ", username);
  return this.http.get<any>(url);
 }
 
   getCharityProfile(username){
  var url=`http://localhost:8080/api/v1/charity-profile/?username=${username}`;
  console.log("Charity Profile Details: ",username);
  return this.http.get<any>(url);
}
getDeliveryBoyProfile(username){
  var url= `http://localhost:8080/api/v1/deliveryBoy-profile/?username=${username}`;
  console.log("Fetching Delivery Boy With Username : ", username);
  return this.http.get<any>(url);
 }
 
 getRestaurantLogs(username){
  var url= `http://localhost:8090/api/v1/restaurant-logs/?username=${username}`;
  console.log("Fetching Restaurant's Logs With Username : ", username);
  return this.http.get<any>(url);
 }

 fetchRestaurantFoodStatus(username){
  var url= `http://localhost:8090/api/v1/restaurant-status/?username=${username}`;
  console.log("Fetching Restaurant's Food Status With Username : ", username);
  return this.http.get<any>(url);
 }

getCharityLogs(username){
  var url=`http://localhost:8070/api/v1/charity-logs/?username=${username}`;
  console.log("Charity Log Details:",username);
  return this.http.get<any>(url);
}
fetchCharityFoodStatus(username){
  var url=`http://localhost:8070/api/v1/charity-status/?username=${username}`;
  return this.http.get<any>(url);
  }

  getDeliveryBoyLogs(username){
    var url= `http://localhost:8040/api/v1/deliveryBoy-logs/?username=${username}`;
    console.log("Fetching Delivery Boy's Route Status With Username : ", username);
    return this.http.get<any>(url);
   }
  
  fetchDeliveryBoyRoute(username){
    var url= `http://localhost:8040/api/v1/deliveryBoy-status/?username=${username}`;
    console.log("Fetching Delivery Boy's Route Status With Username : ", username);
    return this.http.get<any>(url);
   }
}