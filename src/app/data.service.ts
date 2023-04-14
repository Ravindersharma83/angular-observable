import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService{

  // passing data using EventEmitter
  // dataEmitter = new EventEmitter<string>(); // creating a custom event

  // passing data using subject
  dataEmitter = new Subject<string>();
  // create a method that will raise this event or emit some data
  raiseDataEmitterEvent(data:string){
    // this.dataEmitter.emit(data);

    //using subject
    this.dataEmitter.next(data);
  }
}
