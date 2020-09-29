import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-life-components',
  templateUrl: './life-components.component.html',
  styleUrls: ['./life-components.component.scss'],
})
export class LifeComponentsComponent {
  public inputValue1 = 9;
  public inputValue2 = 97;
  public outputValue: number;

  public chanceInputValue1(): void {
    console.log('===> life-components chanceInputValue 1');
    this.inputValue1 += 1;
  }

  public chanceInputValue2(): void {
    console.log('===> life-components chanceInputValue 2');
    this.inputValue2 += 1;
  }

  public onOutputValueEvent(event: any): void {
    console.log('===> life-components onOutputValueEvent', event);
    this.outputValue = event;
  }
}
