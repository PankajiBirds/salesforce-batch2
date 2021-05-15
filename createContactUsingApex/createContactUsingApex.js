import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/ContactLWCController.createContact';

export default class CreateContactUsingApex extends LightningElement {

    @track contactData = {
        FirstName : '',
        LastName : '',
        Email : 'no-reply@gmail.com',
        Phone : ''
    };

    handleSubmitClick(){
        const inputData = this.template.querySelectorAll(".frmInput");      // it will return an array
        
        this.contactData.FirstName = inputData[0].value;
        this.contactData.LastName = inputData[1].value;
        this.contactData.Email = inputData[2].value;
        this.contactData.Phone = inputData[3].value;

        console.log("##");
        console.log(JSON.stringify(this.contactData));

        // called apex class method
        createContact({contact : this.contactData}).then(result => {
            console.log("@@");
            console.log(result);
            this.contactData.FirstName = '';

        }).catch(error => {
            console.log("##");
            console.log(error);
        });

    }
}