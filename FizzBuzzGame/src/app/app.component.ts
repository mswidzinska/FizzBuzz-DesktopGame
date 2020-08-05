import {Component, OnInit} from '@angular/core';
import {FizzBuzzService} from "../services/fizzBuzz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FizzBuzzGame';
  gameArray: any;
  constructor(protected fizzBuzzService:FizzBuzzService ) {
  }
  ngOnInit(): void {
    this.fizzBuzzService.fizzBuzz().subscribe((response)=>{
      this.gameArray = response;
      console.log(this.gameArray)
    });
  }
}

