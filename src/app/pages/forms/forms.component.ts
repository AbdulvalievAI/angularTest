import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToolsService } from '../../../services/tools.service';
import { ErrorsService } from '../../../services/errors.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public isHidePass = true;
  public readonly appearance = 'outline';

  // Form 1
  public myFG1: FormGroup;
  public nameFC: FormControl;
  public surnameFC: FormControl;
  public passwordFC: FormControl;
  public passwordConfirmFC: FormControl;
  public emailFC: FormControl;
  private languageFC: FormControl;
  public languages: Array<string> = ['Russian', 'German', 'English', 'French '];

  // Form 2
  public myFG2: FormGroup;

  // Form 3
  public myFG3: FormGroup;
  public personsFA: FormArray;

  constructor(private _fb: FormBuilder, public errorsService: ErrorsService) {}

  ngOnInit(): void {
    this.initFormItems();
    this.myFG1 = this._fb.group(
      {
        name: this.nameFC,
        surname: this.surnameFC,
        email: this.emailFC,
        password: this.passwordFC,
        passwordConfirm: this.passwordConfirmFC,
        language: this.languageFC,
      },
      { validator: ToolsService.mustMatch('password', 'passwordConfirm') }
    );
    this.myFG2 = this._fb.group(
      {
        name: [null, Validators.required],
        surname: [null, Validators.required],
        email: [null, Validators.required],
      },
      [Validators.required, ToolsService.mustMatch2('name', 'surname')]
    );
    this.myFG3 = this._fb.group({
      persons: this.personsFA,
    });
  }

  private initFormItems(): void {
    this.nameFC = this._fb.control(null, Validators.required);
    this.surnameFC = this._fb.control(null, Validators.required);
    this.emailFC = this._fb.control(null, [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFC = this._fb.control(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]);
    this.passwordConfirmFC = this._fb.control(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]);
    this.languageFC = this._fb.control(null, Validators.required);
    this.personsFA = this._fb.array(
      [],
      [Validators.required, Validators.minLength(3)]
    );
  }

  public printFG1(): void {
    console.log('===> FormGroup 1');
    console.log('===> FormGroup 1 - value', this.myFG1.value);
    console.log('===> FormGroup 1 - Errors', this.myFG1.errors);
    console.log('===> FormGroup 1 - valid', this.myFG1.valid);
    console.log('===> Password FormControl errors', this.passwordFC.errors);
  }
  public printFG2(): void {
    console.log('===> FormGroup 2');
    console.log('===> FormGroup 2 - value', this.myFG2.value);
    console.log('===> FormGroup 2 - Errors', this.myFG2.errors);
    console.log('===> FormGroup 2 - valid', this.myFG2.valid);
    console.log('===> FormGroup 2 !!!!', 'Validators.required не работает');
  }

  public printFG3(): void {
    console.log('===> FormGroup 3');
    console.log('===> FormGroup 3 - value', this.myFG3.value);
    console.log('===> FormGroup 3 - Errors', this.myFG3.errors);
    console.log('===> FormGroup 3 - valid', this.myFG3.valid);
    console.log('===> FormGroup 3 - personsFA - errors', this.personsFA.errors);
  }

  public addPersonHandler(): void {
    this.personsFA.push(
      this._fb.control(null, [Validators.required, Validators.minLength(3)])
    );
  }

  public removePersonHandler(index: number): void {
    this.personsFA.removeAt(index);
  }
}
