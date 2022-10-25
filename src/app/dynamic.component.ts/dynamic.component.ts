import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-dynamic',
  template: `Hello dynamic {{name}}`,
})
export class DynamicComponent {
  @Input() name: number;
}
