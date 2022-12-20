import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') mouseEnter(){
    this.changeColor('red');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor('green')
  }

  changeColor(myColor: string){
    this.element.nativeElement.style.color = myColor;
  }

}
