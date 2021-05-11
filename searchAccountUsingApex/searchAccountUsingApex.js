import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/ContactLWCController.getAccountList';
import accountSearch from '@salesforce/apex/ContactLWCController.accountSearch';

export default class SearchAccountUsingApex extends LightningElement {

    searchName;
    @track accounts;

    @wire(getAccountList) accounts({error , data}){
        this.accounts = data;
    };

    handleName(e){
        this.searchName = e.target.value;
    }

    handleSearchClick(){
        accountSearch({name : this.searchName}).then(result => {
            this.accounts = result;
            console.log("##");
            console.log(result);
        }).catch(error => {
            console.log("@@");
            console.log(error);
        });
    }
}