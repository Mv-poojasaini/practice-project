import { Directive, Renderer2, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector:'[appHighlight]'
})

export class HighlightDirective{
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  private isClicked = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('red');
  }
  @HostListener('click') onClick() {
    this.changeBackgroundColor('yellow');
  }
  private toggleBackgroundColor() {
    this.isClicked = !this.isClicked;
    console.log("--------",this.isClicked)
    const color = this.isClicked ? 'red' : 'transparent'; 
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}