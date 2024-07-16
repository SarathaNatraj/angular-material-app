import {  TestBed } from '@angular/core/testing';
import { ExampleService } from './exampleservice';
import {expect} from 'chai';

describe('ExampleService', () => {
    let service: ExampleService;

    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service= TestBed.inject(ExampleService);
    })

    it('should be created',()=>{
        expect(service).to.be.ok;
    })

    it('should return a value', ()=>{
        expect(service.getValue()).to.equal('real value');
    })

})