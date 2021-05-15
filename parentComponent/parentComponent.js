import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    childData = {
        username : 'Amit Shamra',
        userId : '1001'
    };

    childData2 = {
        username : 'Anita Bhati'
    };

    childData3 = {
        username : '',
        userId : ''
    }

    handleSubmit(){
        const data = this.template.querySelectorAll(".forInput");
        this.childData3.username = data[0].value;
        this.childData3.userId = data[1].value;

        this.template.querySelector(".component3").receiveData(this.childData3);
    }
}