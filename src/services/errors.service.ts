import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  public getValidatorMessage(error: ValidationErrors): string {
    switch (Object.keys(error)[0]) {
      case 'mustMatch':
        return 'Values must match';
      case 'required':
        return 'Field is required';
      case 'email':
        return 'Enter correct email';
      case 'minlength':
        return `Minimum length: ${error.minlength.requiredLength}`;
      case 'maxlength':
        return `Maximum length: ${error.maxlength.requiredLength}`;
      default:
        return 'Enter correct value';
    }
  }
}
