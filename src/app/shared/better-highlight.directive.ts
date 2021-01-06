import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';

  //Version 1 of changing color with renderer
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // @HostListener('mouseenter') mouseOver(eventData: Event): void{
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  // }
  // @HostListener('mouseleave') mouseLeave(eventData: Event): void {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // }

  //Version 2 of changing color with @HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') mouseOver(): void{
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
