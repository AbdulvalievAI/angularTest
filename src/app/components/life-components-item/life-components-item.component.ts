import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-components-item',
  templateUrl: './life-components-item.component.html',
  styleUrls: ['./life-components-item.component.scss'],
})
export class LifeComponentsItemComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() inputValue1 = 33;
  @Input() inputValue2 = 66;
  @Output() outputValueEvent = new EventEmitter<number>();
  public outputValue = 5;
  public test = 16;
  public testValue1 = 26;
  public testValue2 = 76;

  constructor() {
    console.log('===> constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('===> ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('===> ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('===> ngOnDestroy');
  }

  ngAfterContentInit(): void {
    console.log('===> ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('===> ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('===> ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('===> ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('===> ngDoCheck');
  }

  public chanceInputValue1(): void {
    console.log('===> life-components-item chanceInputValue 1');
    this.inputValue1 += 1;
  }

  public chanceInputValue2(): void {
    console.log('===> life-components-item chanceInputValue 2');
    this.inputValue2 += 1;
  }

  public chanceOutputValue(): void {
    console.log('===> life-components-item chanceOutputValue');
    this.outputValue += 1;
    this.outputValueEvent.emit(this.outputValue);
  }

  public chanceTestValue2(): void {
    console.log('===> life-components-item chanceTestValue2 2');
    setTimeout(() => (this.testValue2 += 1), 3000);
  }
}
