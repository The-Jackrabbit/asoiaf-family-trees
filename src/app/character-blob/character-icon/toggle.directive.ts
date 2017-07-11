import { Directive, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit {
  @Input() minimized = true;
  @HostBinding('style.height') height: string ;
  @HostBinding('style.width') width: string ;
  @HostBinding('style.border-radius') borderRadius: string ;

  ngOnInit() {
    this.height = '50pt';
    this.width = '50pt';
    this.borderRadius = '50pt';
  }

  @HostListener('click') onClick(eventData: Event) {
    if (this.minimized) {
      this.height = '100pt';
      this.width = '100pt';
      this.borderRadius = '100pt';
    } else {
      this.height = '50pt';
      this.width = '50pt';
      this.borderRadius = '50pt';
    }
    this.minimized = !this.minimized;
    console.log('click');
  }
}
