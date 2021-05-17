import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class ContactListUsingLDS extends LightningElement {

    contacts;

    /*
    @wire (getListUi , {
        objectApiName : 'Contact',
        listViewApiName : 'AllContacts'
    }) contactList({error , data}){
        if(data){
            console.log("@@");
            console.log(JSON.stringify(data));
            this.contacts = data.records.records;
        } else {
            console.log("##");
            console.log(error);
        }
    }
    */

    @wire (getListUi , {
        listViewId : '00B5g00000BZg7tEAD'
    }) contactList({error , data}){
        if(data){
            console.log("@@");
            console.log(JSON.stringify(data));
            this.contacts = data.records.records;
        } else {
            console.log("##");
            console.log(error);
        }
    }
}