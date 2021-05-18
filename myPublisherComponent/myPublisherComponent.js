import { LightningElement, wire } from 'lwc';
import { fireEvent, registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MyPublisherComponent extends LightningElement {

    pageRef = '';
    shareData = '';

    @wire(CurrentPageReference) pageRef;

    handlePublisher(){
        fireEvent(this.pageRef, "showMessage", "Hello World - The detail will passed by the publisher component");
    }

    handleSendDetail(){
        var dataArray = this.template.querySelectorAll(".forInput");

        fireEvent(this.pageRef,"showDetail",dataArray);
    }

    connectedCallback(){
        //  registerListener("shareEvent",this.displayShareEventData,this);
    }

    handleSubscribe(){
        registerListener("shareEvent",this.displayShareEventData,this);
    }

    displayShareEventData(myData){
        this.shareData = myData;
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}