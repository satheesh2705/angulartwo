import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[show]'
})
export class AppShow {
    private rendered = false;

    @Input() set show(value: boolean) {
        if (value && !this.rendered) {
            this.container.createEmbeddedView(this.template);
            this.rendered = true;
        } else if (!value && this.rendered) {
            this.container.clear();
            this.rendered = false;
        }
    }

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {}
}

