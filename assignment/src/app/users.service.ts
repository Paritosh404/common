import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    activeUsers: string[] = ['Max', 'Anna']
    inactiveUsers: string[] = ['Chris', 'Manu']

    constructor(private counterService: CounterService){
    }
    
    setUserStatus(id: number, status: String) {
        if(status === 'inactive'){
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id,1);
            this.counterService.incrementInactiveToActive();
        }

        else {
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id,1);
            this.counterService.incrementActiveToInactive();

        }
    }

}