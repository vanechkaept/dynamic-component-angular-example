import { Component, DoCheck, Input, TemplateRef, VERSION, ViewChild } from '@angular/core';
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

  public obj = {
    count: 10,
  }

  public name = 'Dmitry';

  public ngDoCheck(): void{

  }


  public changeObj(): void{
    this.obj.count = this.obj.count + 1;
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
