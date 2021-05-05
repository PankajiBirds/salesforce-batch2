import { LightningElement } from 'lwc';

export default class ComboboxExample extends LightningElement {

    states = [
        {label : 'Rajasthan', value : 'Raj'},
        {label : 'Madhya Pradesh', value : 'MP'},
        {label : 'Uttar Pradesh', value : 'UP'}
    ];

    selectedState = "UP";

    handleStateChange(event){
        this.selectedState =  event.target.value;
    }

    get cities(){
        return [
            {label : 'Ajmer', value : 'AJM'},
            {label : 'Jaipur', value : 'JPR'},
            {label : 'Bikaner', value : 'BKN'}
        ];
    }

    selectedCity = "JPR";

    handleCityChange(e){
        this.selectedCity = e.target.value;
    }
}