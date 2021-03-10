import { element } from 'protractor';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void{
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
  }
  // Hostlistener takes any events from the mouse and the keyboard
  // In the below example  dblclick and mouse leave events are captured
  @HostListener('dblclick') mouseover(event: Event): void{
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseleave(event: Event): void{
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'grey');
  }
}
