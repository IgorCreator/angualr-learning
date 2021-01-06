import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({selector: '[appDropdown]'})

export class DropdownDirective {

  @HostBinding('class.show') isShowing = false;

  @HostListener('click') toggleShowonClick(): void {
    console.log('called toggleShowonClick');
    this.isShowing = !this.isShowing;
  }

}
