import {Injectable} from '@angular/core';
import {zip, Observable, timer} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FizzBuzzService {

  numbers$: Observable<number> = timer(1000, 500).pipe
  (map(n => n += 1));

  public numbersStream$: Observable<number> = this.numbers$.pipe(share());

  fizz$: Observable<string> = this.numbers$.pipe
  (map(n => n % 3 === 0 ? 'Fizz' : null));

  buzz$: Observable<string> = this.numbers$.pipe
  (map(n => n % 5 === 0 ? 'Buzz' : null));

  fizzBuzz(): Observable<string> {
    return zip(this.numbers$, this.fizz$, this.buzz$)
      .pipe(
        map(
          ([numbers$, fizz$, buzz$]) =>
            ([fizz$ == null && buzz$ == null ? numbers$ : null,
              fizz$,
              buzz$])
              .filter((v) => v !== null).join('')
        )
      );
  }
  restart(): void {
    window.location.reload();
  }
}
