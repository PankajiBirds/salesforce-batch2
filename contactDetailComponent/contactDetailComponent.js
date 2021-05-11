import { LightningElement, wire } from 'lwc';
import  contactDetailById  from '@salesforce/apex/ContactLWCController.contactDetailById';

export default class ContactDetailComponent extends LightningElement {
    contactData = {}
    @wire(contactDetailById) contactDetail({error,data}){
        if(data){
            console.log("##");
            console.log(data);
            this.contactData = data;
        } else {
            console.log("@@");
            console.log(error);
        }
    }

}