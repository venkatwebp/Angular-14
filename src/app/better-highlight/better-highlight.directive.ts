import { Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2,
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  constructor(private elRef: ElementRef, private render: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.cursor') cursor: string = 'none';
  @HostBinding('style.border') border: string = "none";

  ngOnInit(){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', '#c0c0c0')
    // this.backgroundColor = 'defaultColor';
    
  } 
  @HostListener('mouseover') mouseover(eventData: Event){
    this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    this.backgroundColor = '#7acbf1';
    this.cursor = "pointer";
    // this.border = "solid 2px #808080";
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
    this.backgroundColor = 'transparent';
    // this.border = "none";
    this.backgroundColor = this.defaultColor;
  }
}
