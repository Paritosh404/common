import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor(private counterService: CounterService){
  }

  ngOnInit() {
    this.counterService.activeToInactive.subscribe(
      (count:number) => {
        this.activeToInactiveCounter = count
      }
    )

    this.counterService.inactiveToActive.subscribe(
      (count:number) => {
        this.inactiveToActiveCounter = count
      }
    )
  }


}
