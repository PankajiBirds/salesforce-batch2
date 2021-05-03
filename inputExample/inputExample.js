import { LightningElement } from 'lwc';

export default class InputExample extends LightningElement {

    username = "Amit";
    contact = "7891089874";
    email = "";

    handleUsername(event){
        // var username = event.target.value;        
        // alert(username);

        this.username = event.target.value;
    }

    handleContact(e){
        this.contact = e.target.value;
    }

    handleClickMe(e){
        this.email = this.template.querySelector(".email").value;
    }
}