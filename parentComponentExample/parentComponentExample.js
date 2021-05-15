import { LightningElement } from 'lwc';

export default class ParentComponentExample extends LightningElement {

    isDisplay = false;
    userData = {};
    isUserData = false;

    handleSimpleEvent(){
        this.isDisplay = true;
    }

    handleRemove(){
        this.isDisplay = false;
    }

    handleChildData(myData){
        console.log("@@");
        console.log(JSON.stringify(myData));
        console.log(myData.detail.name);
        this.userData = myData.detail;
        this.isUserData = true;
    }
}