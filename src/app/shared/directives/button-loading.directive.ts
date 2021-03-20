import { Directive, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: `button[mat-button][loading],
  button[mat-raised-button][loading],
  button[mat-icon-button][loading],
  button[mat-fab][loading],
  button[mat-mini-fab][loading],
  button[mat-stroked-button][loading],
  button[mat-flat-button][loading]`
})
export class ButtonLoadingDirective implements OnChanges
{
  @Input() loading: boolean;
  private readonly _nativeElement: HTMLElement;
  constructor(el: ElementRef)
  {
    this._nativeElement = el.nativeElement;
  }
  ngOnChanges(changes: SimpleChanges): void
  {
    const isload = changes.loading.currentValue;

    if (isload)
    {
      this._nativeElement.classList.add('spinner');
      this._nativeElement.setAttribute('disabled', isload);
    } else
    {
      this._nativeElement.classList.remove('spinner');
      this._nativeElement.removeAttribute('disabled');
    }
  }

}
