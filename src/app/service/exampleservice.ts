import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ExampleService{
    getValue():string{
        return 'real value';

    }
}