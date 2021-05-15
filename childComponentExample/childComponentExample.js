import { LightningElement } from 'lwc';

export default class ChildComponentExample extends LightningElement {

    handleClickMe(){
        const customEvent = CustomEvent('simpleevent');

        this.dispatchEvent(customEvent);

    }

    handleRemove(){
        const myRemoveEvent = CustomEvent('removeevent');
        this.dispatchEvent(myRemoveEvent);
    }

    handleSendToParent(){

        const data = this.template.querySelectorAll('.forInput');

        const dataJson = {
            name : data[0].value,
            password : data[1].value,
            email : data[2].value,
            city : data[3].value
        }

        const myDataEvent = CustomEvent('dataevent',{detail : dataJson});
        
        this.dispatchEvent(myDataEvent);
    }
}