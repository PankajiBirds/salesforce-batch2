import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MySubscribeComponent extends LightningElement {

    pageRef;
    message;

    details = {};

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener("showMessage",this.displayMessage,this);
        registerListener("showDetail",this.displayDetail,this);
    }

    displayMessage(data){
        alert(data);
        this.message = data;
    }

    displayDetail(data){
        this.details = {
            name : data[0].value,
            email : data[1].value
        }        
    }

    handleShare(){
        fireEvent(this.pageRef,"shareEvent","Hello PubSub");
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}