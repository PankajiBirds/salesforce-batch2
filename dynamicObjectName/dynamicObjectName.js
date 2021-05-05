import { LightningElement, api } from 'lwc';

export default class DynamicObjectName extends LightningElement {

    @api recordId;
    @api objectApiName;

}