import { Component, OnInit } from '@angular/core';
// 1- import observal from rxjs
import { Observable, from, of } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'angular-observable-tut';

  constructor(private dataService : DataService){

  }






  // 2- creating a observable using Observable() constructor
  myObservable = new Observable((observer)=>{
    console.log('Observable starts');
    // 3- emit or return some data using next() method that this observable is going to emit/return
    // observer.next('1');
    // observer.next('2');
    // observer.next('3');
    // observer.next('4');

    setTimeout(()=>{observer.next('1')},1000)
    setTimeout(()=>{observer.next('2')},2000)
    setTimeout(()=>{observer.next('3')},3000)
    // 5- handling error in observable
    // setTimeout(()=>{observer.error(new Error('Something went wrong!'))},3000)

    setTimeout(()=>{observer.next('4')},4000)

    // when observable complete the emittion of data than it emits a complete signal
    setTimeout(()=>{observer.complete()},5000)
  });

  // 2-b - creating an Observable using create() method
  // myObservable = Observable.create((observer)=>{
  //   setTimeout(()=>{observer.next('A')},1000)
  //   setTimeout(()=>{observer.next('B')},2000)
  //   setTimeout(()=>{observer.next('C')},3000)
  // });

  //2-c creating an Observable using of() operator
  array1 = [1,2,3,4,5];
  array2 = ['a','b','c'];
  // myObservable = of(this.array1, this.array2, 24, 'Ravinder');

  //using from operator
  // myObservable = from(this.array1);
  // from accepts only one argument and it iterates through values while of use multiple arguments and return as it is data.

  ngOnInit(){
    // Observable only emit the data if there is a subscriber
    // 4- creating a subscriber (a subscriber take 3 optional parameter as call back function, - next,error,complete ) .the first paramenter next is a callback function that is executed everytime when the next function return some value.
    this.myObservable.subscribe((val)=>{
      console.log(val);
    }, (error)=>{
      alert(error.message);
    }, ()=>{
      // alert('Observable has complete emitting all values.');
    }
    );

  }
}
