import { LightningElement, track } from 'lwc';

export default class RadioExample extends LightningElement {

    @track gender = [
        {label : 'Male', value : 'male'},
        {label : 'Female', value : 'female'},
        {label : 'Other', value : 'other'}
    ]

    selectedGender = "male";

    handleGender(event){
        this.selectedGender =  event.target.value;
    }

    /*
        Reactive property
        1.      @track  : private property
        2.      @api    : public property
        3.      @wire   : when we need to call apex class
    */
}