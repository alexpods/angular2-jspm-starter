import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: "Hello, {{ greeting }}!!!"
})
export class App {
    greeting: string = '';

    constructor() {
        setInterval(() => this.greeting = ['Alex', 'Angular2 Fans'][Math.floor(Math.random()*2)], 1000);
    }
}