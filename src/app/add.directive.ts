import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[addHost]',
})
export class AddDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
