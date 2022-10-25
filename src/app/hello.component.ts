import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}!</h1>
  {{obj | json}}
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements DoCheck  {
  @Input() name: string;
  @Input() obj: object;


  ngDoCheck(): void{
    console.log('name ', this.name);
    console.log('obj ' , this.obj)
  }

}
