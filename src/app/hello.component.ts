import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import {
  BehaviorSubject,
  interval,
  tap,
  Observable,
  reduce,
  pairwise,
  map,
  startWith,
  MonoTypeOperatorFunction,
  pipe,
} from 'rxjs';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}!</h1>
  {{obj | async | json}}
  <br>
  {{intervalCount}}
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements DoCheck {
  @Input() name: string;
  @Input() obj: BehaviorSubject<{ count: number }>;

  intervalCount = 0;

  interval$: Observable<number>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    interval(1000)
      .pipe(
        // startWith(0),
        // tap(_ => changeDetectorRef.detectChanges()),
        pairwise(),
        map(([p, c]) => c + 1)
        // subscribeAndRender()
      )
      .subscribe((_) => (this.intervalCount += 1));
  }

  ngDoCheck(): void {
    console.log('name ', this.name);
    console.log('obj ', this.obj.value);
  }

  // function firstTruthy<T>(): MonoTypeOperatorFunction<T> {
  // return pipe(first(v => Boolean(v)));
  // }
}

// function subscribeAndRender<T>(): MonoTypeOperatorFunction<T> {
//   // changeDetectorRef.detectChanges();
//   console.log('111');
//   return pipe();
// }
