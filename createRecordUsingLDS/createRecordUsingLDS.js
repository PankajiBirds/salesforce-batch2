import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateRecordUsingLDS extends LightningElement {

    account = {
        Name : '',
        AccountNumber : '',
        Email__c : '',
        Phone : ''
    }

    handleSave(){
        console.log("@@");

        const dataArray = this.template.querySelectorAll(".forInput");

        this.account.Name = dataArray[0].value;
        this.account.AccountNumber = dataArray[1].value;
        this.account.Email__c = dataArray[2].value;
        this.account.Phone = dataArray[3].value;

        console.log(this.account);

        const fields = this.account;        

        createRecord({apiName : 'Account' , fields}).then(result => {
            console.log("@@");
            console.log(result);
            alert(JSON.stringify(result.id));
        }).catch(error => {
            console.log("##");
            console.log(error);
            alert(JSON.stringify(error));
        });
    }
}