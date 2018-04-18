import { Component, OnInit, ElementRef, OnDestroy, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/mapTo';

@Component({
  selector: 'blink',
  template: `<ng-content></ng-content>`
})
export class BlinkComponent implements OnInit, OnDestroy {
  private element: Element;
  private blinker$: Observable<string>;
  private active: boolean = true;

  constructor(private renderer: Renderer, elementRef: ElementRef) {
    this.element = elementRef.nativeElement;

    const show$ = Observable.timer(0, 1500);
    const hide$ = Observable.timer(1125, 1500);

    this.blinker$ = Observable.merge(
      show$.mapTo('visible'),
      hide$.mapTo('hidden')
    );
  }

  private set visibility(value: string) {
    this.renderer.setElementStyle(this.element, 'animation', "blinker 2s linear infinite");
  }

  ngOnInit() {
    this.blinker$
      .takeWhile(() => this.active)
      .subscribe((newVisiblity: string) => this.visibility = newVisiblity);
  }

  ngOnDestroy() {
    this.active = false;
  }

}