import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class UserDetailExample extends LightningElement {

    userId = USER_ID;
    userData = {};

    @wire(getRecord , {
        recordId : USER_ID,
        fields : ['User.FirstName','User.LastName','User.Email']
    }) userDetail({error , data}){
        if(data){
            console.log("@@");
            console.log(data);
            this.userData = {
                FirstName : data.fields.FirstName.value,
                LastName : data.fields.LastName.value,
                Email : data.fields.Email.value
            }
        } else {
            console.log("##");
            console.log(error);
        }
    }

}