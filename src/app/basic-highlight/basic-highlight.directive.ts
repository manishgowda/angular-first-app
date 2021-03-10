import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class AppBasicHighlightDirective implements OnInit {
  constructor(private element: ElementRef){

  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
