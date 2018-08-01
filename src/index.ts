import { interval } from 'rxjs';
import { map, filter, sample } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


/* const observable = new Observable((observer) => {
  observer.next(5);
});

observable.subscribe(value => console.log(value + '!'));

console.log('And now we are here.'); */