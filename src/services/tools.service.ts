import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  /** Валидатор сравнения значений двух FormControl */
  public static mustMatch(
    controlName: string,
    matchingControlName: string
  ): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        control.setErrors({ mustMatch: true });
        matchingControl.setErrors({ mustMatch: true });
      } else {
        control.setErrors(null);
        matchingControl.setErrors(null);
      }
    };
  }

  /** Вторая версия валидатора сравнения значений двух FormControl */
  public static mustMatch2(
    controlName1: string,
    controlName2: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const control1 = control.get(controlName1);
      const control2 = control.get(controlName2);
      if (control1.value === control2.value) {
        return {};
      }
      return { mustMatch: true };
    };
  }
}
