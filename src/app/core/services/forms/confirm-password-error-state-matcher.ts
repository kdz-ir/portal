import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class ConfirmPasswordErrorStateMatcher implements ErrorStateMatcher
{
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean
    {
        return (control.touched && (control.invalid || control.parent.errors?.confirmPassword));
    }
}
