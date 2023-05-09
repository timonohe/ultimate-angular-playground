import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from "@angular/core";

@Component({
  selector: 'ultimate-angular-playground-lifecycle-example',
  templateUrl: './lifecycle-example.component.html',
  styleUrls: ['./lifecycle-example.component.scss'],
})
export class LifecycleExampleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  lifecycleCounter: Map<string, number> = new Map([
    ['OnChanges', 0],
    ['OnInit', 0],
    ['DoCheck', 0],
    ['AfterContentInit', 0],
    ['AfterContentChecked', 0],
    ['AfterViewInit', 0],
    ['AfterViewChecked', 0],
    ['OnDestroy', 0],
  ]);

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges', 'Some changes were made.');
    this.countLifecycleCall('OnChanges');
  }

  ngOnInit(): void {
    console.log('OnInit', 'This Component is initialized.');
    this.countLifecycleCall('OnInit');
  }

  ngDoCheck(): void {
    console.log(
      'DoCheck',
      'Angular checked via change-detection if something was changed here.'
    );
    this.countLifecycleCall('DoCheck');
  }

  ngAfterContentInit(): void {
    console.log(
      'AfterContentInit',
      'Content from parent component was projected here.'
    );
    this.countLifecycleCall('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(
      'AfterContentChecked',
      'Projected content from parent component was checked.'
    );
    this.countLifecycleCall('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log(
      'AfterViewInit',
      'Component view and child views was initialized once.'
    );
    this.countLifecycleCall('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log(
      'AfterViewChecked',
      'Component view and child views was checked once.'
    );
    this.countLifecycleCall('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy', 'Component was destroyed.');
    this.countLifecycleCall('OnDestroy');
  }

  private countLifecycleCall(lifecycle: string): void {
    const lifecycleCount = this.lifecycleCounter.get(lifecycle);
    if (lifecycleCount !== undefined) {
      this.lifecycleCounter.set(lifecycle, lifecycleCount + 1);
    }
  }
}
