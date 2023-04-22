import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, FormGroup, FormBuilder } from '@angular/forms';
import { isEmpty, isNil } from 'lodash-es';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ordoo-hamyesh-poll',
  templateUrl: './ordoo-hamyesh-poll.component.html',
  styleUrls: ['./ordoo-hamyesh-poll.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: OrdooHamyeshPollComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: OrdooHamyeshPollComponent
    }
  ]
})
export class OrdooHamyeshPollComponent implements ControlValueAccessor, Validator, OnDestroy {
  @Input() ageRange: number;
  fGroup: FormGroup;
  disabled: boolean = false;
  onChangeSubs: Subscription[] = [];
  onTouched: Function = () => { };
  constructor (fb: FormBuilder) {
    this.fGroup = fb.group({
      isOrdooHamayesh: [false],
      resumeWriting: [false],
      ravanShenasi: [false],
      technologyWorkshop: [false],
      other: [],
      linkedin: [false],
      emotionalIntelligenceWorkshop: [false],
      contentProduction: [false],
      principlesOfPhotography: [false],
      bodyLanguage: [false],
      mindControlWorkshop: [false],

      algoritm: [false],
      narmafzar: [false],
      grim: [false],
      bracelets: [false],
      narration: [false],
      caricature: [false],
      origami: [false],
      helps: [false],
      experiments: [false],
      iran: [false],
      yoga: [false],
      stories: [false],
      food: [false],
      arts: [false]
    });
  }
  writeValue(value: any): void {
    if (!isEmpty(value)) {
      this.fGroup.setValue(value, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    const sub = this.fGroup.valueChanges.subscribe(fn);
    this.onChangeSubs.push(sub);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  validate(control: AbstractControl<any, any>): ValidationErrors {
    if (this.fGroup.valid) {
      return null;
    }
    let errors: ValidationErrors = {};
    for (const controlName in this.fGroup.controls) {
      const controlErrors = this.fGroup.get(controlName)?.errors;
      if (!isNil(controlErrors))
        errors[controlName] = controlErrors;
    }
    return errors;
  }
  ngOnDestroy(): void {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }
  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.fGroup.disable();
    }
    else {
      this.fGroup.enable();
    }
  }
  ngOnInit(): void {
  }

}
