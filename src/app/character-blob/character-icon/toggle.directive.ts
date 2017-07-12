import { Directive, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit {
  @Input() minimized;
  @HostBinding('style.height') height: string ;
  @HostBinding('style.width') width: string ;
  @HostBinding('style.border-radius') borderRadius: string ;

  initial = '50pt';
  enlarged = '70pt';

  ngOnInit() {
    if (!this.minimized) {
      this.height = this.enlarged;
      this.width = this.enlarged;
      this.borderRadius = this.enlarged;
    } else {
      this.height = this.initial;
      this.width = this.initial;
      this.borderRadius = this.initial;
    }
  }

  @HostListener('click') onClick(eventData: Event) {
    if (this.minimized) {
      this.height = this.enlarged;
      this.width = this.enlarged;
      this.borderRadius = this.enlarged;
    } else {
      this.height = this.initial;
      this.width = this.initial;
      this.borderRadius = this.initial;
    }
    this.minimized = !this.minimized;
    console.log('click');
  }
}
