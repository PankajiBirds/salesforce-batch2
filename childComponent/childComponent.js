import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api username;      // public property
    @api userData = {};

    @api
    receiveData(data){
        this.userData = data;
        alert('Hello child component');
    }
}