import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appHide]' })
export class HideDirective {

constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}

 @Input('appHide') set displayView(condition: boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
 }

}
