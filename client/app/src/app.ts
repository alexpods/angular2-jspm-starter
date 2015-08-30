import { Component, View } from 'angular2/angular2';
import { FontSize } from './FontSize';

@Component({
    selector: 'app'
})
@View({
    directives: [
        FontSize
    ],
    template: `
        <font-size-component
            [font-size]="1234"
            (font-size-change)="onFontSizeChange($event)"
        ></font-size-component>
    `
})
export class App {
    greeting: string = '';

    constructor() {
        setInterval(() => this.greeting = ['Alex22aqrwsssssss', 'Angular2 Fans'][Math.floor(Math.random()*2)], 1000);
    }

    onFontSizeChange(newFontSize) {
        console.log('in app on font size change', newFontSize);
    }
}