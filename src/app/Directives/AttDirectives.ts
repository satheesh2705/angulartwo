import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[CustomStyle]'
})


export class AttDirectives implements OnInit{

    constructor(private element:ElementRef){}

    ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor='aqua';
        
    }

}