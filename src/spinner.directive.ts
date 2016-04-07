import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[spinner]'
})
export class SpinnerDirective {
	@Input('spinner') isLoading: boolean = false;

	private _classes = {
		'processing': 'btn--processing',
		'idle': 'btn--idle'
	};

	constructor(private el: ElementRef) { }

	ngDoCheck() {
		this.toggleClass(this.isLoading);
	}

	toggleClass(toggle: boolean) {
		if (toggle) {
			if (!this.el.nativeElement.classList.contains(this._classes.idle)) {
				this.el.nativeElement.classList.add(this._classes.idle);
			}
			this.el.nativeElement.classList.add(this._classes.processing);
		} else {
			this.el.nativeElement.classList.remove(this._classes.processing);
		}
	}
}