import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;
    activeToInactive = new EventEmitter<number>();
    inactiveToActive = new EventEmitter<number>();

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active To Inactive => '+this.activeToInactiveCounter);
        this.activeToInactive.emit(this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('Inactive To Active => '+this.inactiveToActiveCounter);
        this.inactiveToActive.emit(this.inactiveToActiveCounter);
    }
}