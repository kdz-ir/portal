import
  {
    Directive, Input, ElementRef, SimpleChanges, OnChanges, ComponentFactory,
    ComponentRef, ComponentFactoryResolver, ViewContainerRef, Renderer2
  } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[largeLoading]'
})
export class LargeLoadingDirective implements OnChanges
{
  private readonly spinnerFactory: ComponentFactory<MatProgressSpinner>;
  private spinner: ComponentRef<MatProgressSpinner>;
  @Input() largeLoading: boolean;
  private readonly _nativeElement: HTMLElement;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    el: ElementRef)
  {
    this._nativeElement = el.nativeElement;
    this.spinnerFactory = this.componentFactoryResolver.resolveComponentFactory(MatProgressSpinner);
  }
  ngOnChanges(changes: SimpleChanges): void
  {
    const isload = changes.largeLoading.currentValue;
    if (isload)
    {
      this._nativeElement.classList.add('mat-loading');
      this._createSpinner();
    } else
    {
      this._nativeElement.classList.remove('mat-loading');

      this._destroySpinner();
    }
  }
  private _createSpinner()
  {
    if (!this.spinner)
    {
      this.spinner = this.viewContainerRef.createComponent(this.spinnerFactory);
      this.spinner.instance.diameter = 50;
      this.spinner.instance.mode = 'indeterminate';
      this.renderer.appendChild(this._nativeElement, this.spinner.instance._elementRef.nativeElement);
    }
  }
  private _destroySpinner(): void
  {
    if (this.spinner)
    {
      this.spinner.destroy();
      this.spinner = null;
    }
  }
}
