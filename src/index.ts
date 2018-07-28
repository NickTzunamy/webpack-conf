// RxJS v6+
import { interval } from 'rxjs';
import {map, filter, sample} from 'rxjs/operators';
//emit value every 1s
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));

const logMsg = (msg: any) => {
  console.log(msg);
}



logMsg('welcome!');

document.write('go');