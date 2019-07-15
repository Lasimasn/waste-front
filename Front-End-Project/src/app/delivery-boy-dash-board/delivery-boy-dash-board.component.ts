import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-delivery-boy-dash-board',
  templateUrl: './delivery-boy-dash-board.component.html',
  styleUrls: ['./delivery-boy-dash-board.component.css']
})
export class DeliveryBoyDashBoardComponent implements OnInit {

  deliveryBoy: any[];
  username: string;
  deliveryRoute:any;
  deliveryBoyLogs : any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DonationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');

    console.log(this.username)
    this.service.getDeliveryBoyProfile(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryBoy=data;})
    
    console.log(this.username)
    this.service.getDeliveryBoyLogs(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryBoyLogs=data;})
  }

  fetchRoute(){
    console.log(this.username)
    this.service.fetchDeliveryBoyRoute(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryRoute=data;})
  }

}
