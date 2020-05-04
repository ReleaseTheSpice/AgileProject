import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[gameSold]'
})

export class SoldDirective {
    @HostBinding('class.is-sold') isSold;
    @HostBinding('class.is-sold-hovering') hovering;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }

    @Input() set gameSold(value){
        this.isSold = value;
    }
}
