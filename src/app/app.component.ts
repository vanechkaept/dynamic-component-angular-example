import { Component, DoCheck, Input, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddDirective } from './add.directive';
import { DynamicComponent } from './dynamic.component.ts/dynamic.component';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  @ViewChild(AddDirective, { static: true }) addHost: AddDirective;

  public obj: BehaviorSubject<{count: number}> = new BehaviorSubject({
    count: 10,
  })

  public name = 'Dmitry';

  public ngDoCheck(): void{

  }


  public changeObj(): void{
    const count = this.obj.value.count + 1;
    this.obj.next({count});
  }


  public addDynamicComponent(): void {
    console.log(this.addHost);
    const viewContainerRef = this.addHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(DynamicComponent);
    componentRef.instance.name = 12345;
  }

  public addHelloComponent(): void {
    // console.log(this.addHost);
    // const viewContainerRef = this.addHost.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent(HelloComponent);
    // componentRef.instance.name = 'Everyone';
  }
}
