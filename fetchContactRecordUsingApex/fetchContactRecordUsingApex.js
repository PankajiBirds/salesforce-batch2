import { LightningElement, wire } from 'lwc';
import contactList  from '@salesforce/apex/ContactLWCController.contactList';
import opportunityList from '@salesforce/apex/ContactLWCController.opportunityList';
import accountList from '@salesforce/apex/ContactLWCController.accountList';

export default class FetchContactRecordUsingApex extends LightningElement {

    //  @wire

    /*
        here we have 3 way to get data from apex class using wire
        1.      Wire as property
        2.      Wire as function
        3.      Wire as imperative
    */

    //  Way 2

    dataList;
    allAccountData;

    @wire (contactList) contacts({error, data}){
        if(data){
            //  console.log("@@ : ");
            console.log(data);
            this.dataList = data;
        } else {
            //  console.log("## : ");
            console.log(error);
        }
    }

    //  Way 1
    @wire (opportunityList) opportunitys;

    //  Way 3

    handleAccounts(){
        accountList().then(result => {
            console.log("@@");
            console.log(result);
            this.allAccountData = result;
        }).catch(error => {
            console.log("## : ");
            console.log(error);
        });
    }
}