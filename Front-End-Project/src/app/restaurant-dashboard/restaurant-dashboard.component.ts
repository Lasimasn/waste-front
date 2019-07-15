import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
// import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  constructor(private service: DonationService) { }
  username: string;
  restaurant: any;
  restaurantLogs: any;
  foodStatus: any;
  a: any;
  latitude: string;
  longitude: string;
  veg : any;
  nonveg : any;
  // details = new RestaurantActivity;
  ngOnInit() { 
    this.username = sessionStorage.getItem('username');
    console.log(this.username)
    this.service.getRestaurantProfile(this.username).subscribe(data => {
      console.log(data)
      this.restaurant = data;
      console.log(this.restaurant);
    })

    this.service.getRestaurantLogs(this.username).subscribe(data => {
      console.log(data)
      this.restaurantLogs = data;
    })
  
  }

  openDonationModal(){
    document.getElementById('donationModal').style.display="block";
  }

  closeDonationModal(){
    document.getElementById('donationModal').style.display="none";
  }
  fetchStatus() {
    this.service.fetchRestaurantFoodStatus(this.username).subscribe(data => {
      console.log(data)
      this.foodStatus = data;
    })
  }
  
}
