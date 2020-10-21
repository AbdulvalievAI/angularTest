import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// Observable
console.log('=============Observable');
const myObservable = new Observable((subscriber) => {
  subscriber.next('myObservable 1');
  subscriber.next('myObservable 2');
  subscriber.next('myObservable 3');
});
myObservable.subscribe((v) => console.log(`subscribe #1 - ${v}`));
myObservable.subscribe((v) => console.log(`subscribe #2 - ${v}`));
setTimeout(() => {
  myObservable.subscribe((v) => console.log(`subscribe #3 - ${v}`));
}, 0);
// RESULT
// =============Observable
// subscribe #1 - myObservable 1
// subscribe #1 - myObservable 2
// subscribe #1 - myObservable 3
// subscribe #2 - myObservable 1
// subscribe #2 - myObservable 2
// subscribe #2 - myObservable 3
// subscribe #3 - myObservable 1
// subscribe #3 - myObservable 2
// subscribe #3 - myObservable 3

// Subject
console.log('=============Subject');
const mySubject = new Subject();
mySubject.subscribe((v) => console.log(`subscribe #1 - ${v}`));
mySubject.next('mySubject 1');
mySubject.next('mySubject 2');
mySubject.subscribe((v) => console.log(`subscribe #2 - ${v}`));
setTimeout(() => {
  mySubject.subscribe((v) => console.log(`subscribe #3 - ${v}`));
}, 1000);
mySubject.next('mySubject 3');
mySubject.subscribe((v) => console.log(`subscribe #4 - ${v}`));
// RESULT
// =============Subject
// subscribe #1 - mySubject 1
// subscribe #1 - mySubject 2
// subscribe #1 - mySubject 3
// subscribe #2 - mySubject 3

// BehaviorSubject
console.log('=============BehaviorSubject');
const myBehaviorSubject = new BehaviorSubject('myBehaviorSubject 0');
myBehaviorSubject.subscribe((v) => console.log(`subscribe #1 - ${v}`));
myBehaviorSubject.next('myBehaviorSubject 1');
myBehaviorSubject.next('myBehaviorSubject 2');
myBehaviorSubject.subscribe((v) => console.log(`subscribe #2 - ${v}`));
setTimeout(() => {
  myBehaviorSubject.subscribe((v) => console.log(`subscribe #3 - ${v}`));
}, 1000);
myBehaviorSubject.next('myBehaviorSubject 3');
myBehaviorSubject.subscribe((v) => console.log(`subscribe #4 - ${v}`));
// RESULT
// =============BehaviorSubject
// subscribe #1 - myBehaviorSubject 0
// subscribe #1 - myBehaviorSubject 1
// subscribe #1 - myBehaviorSubject 2
// subscribe #2 - myBehaviorSubject 2
// subscribe #1 - myBehaviorSubject 3
// subscribe #2 - myBehaviorSubject 3
// subscribe #4 - myBehaviorSubject 3
// subscribe #3 - myBehaviorSubject 3

// ReplaySubject
console.log('=============myReplaySubject');
const myReplaySubject = new ReplaySubject();
myReplaySubject.subscribe((v) => console.log(`subscribe #1 - ${v}`));
myReplaySubject.next('myReplaySubject 1');
myReplaySubject.next('myReplaySubject 2');
myReplaySubject.subscribe((v) => console.log(`subscribe #2 - ${v}`));
setTimeout(() => {
  myBehaviorSubject.subscribe((v) => console.log(`subscribe #3 - ${v}`));
}, 1000);
myReplaySubject.next('myReplaySubject 3');
myReplaySubject.subscribe((v) => console.log(`subscribe #4 - ${v}`));
// RESULT
// =============myReplaySubject
// subscribe #1 - myReplaySubject 1
// subscribe #1 - myReplaySubject 2
// subscribe #2 - myReplaySubject 1
// subscribe #2 - myReplaySubject 2
// subscribe #1 - myReplaySubject 3
// subscribe #2 - myReplaySubject 3
// subscribe #4 - myReplaySubject 1
// subscribe #4 - myReplaySubject 2
// subscribe #4 - myReplaySubject 3
// subscribe #3 - myReplaySubject 1
// subscribe #3 - myReplaySubject 2
// subscribe #3 - myReplaySubject 3
