import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
// import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-charity-dash-board',
  templateUrl: './charity-dash-board.component.html',
  styleUrls: ['./charity-dash-board.component.css']
})
export class CharityDashBoardComponent implements OnInit {

  username: string;
  charity: any;
  charityLogs: any[];
  foodStatus: any;
  constructor(private service:DonationService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('username');

    console.log(this.username);
    this.service.getCharityProfile(this.username).subscribe(data=>{
      this.charity=data;
      console.log(this.charity);
    })

  this.service.getCharityLogs(this.username).subscribe(data=>{
    this.charityLogs=data;
    console.log(this.charityLogs);
    })
  }
  fetchStatus(){
    this.service.fetchCharityFoodStatus(this.username).subscribe(data=>{
      console.log(data)
      this.foodStatus=data;})

  }

}
