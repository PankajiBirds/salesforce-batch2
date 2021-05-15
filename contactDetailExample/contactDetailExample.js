import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class ContactDetailExample extends LightningElement {

    @api recordId;

    contactData = {};

    @wire(getRecord,{
        recordId : '$recordId',
        fields : ['Contact.FirstName','Contact.LastName','Contact.Email','Contact.Phone'],
    }) contactDetail({error , data}){
        if(data){
            console.log(JSON.stringify(data.fields));
            this.contactData = {
                Name : (data.fields.FirstName.value == null ? 'Unknown' : data.fields.FirstName.value) + ' ' + data.fields.LastName.value,
                Email : data.fields.Email.value,
                Phone : data.fields.Phone.value
            }
        } else {
            console.log('##');
            console.log(error);
        }
    }

}