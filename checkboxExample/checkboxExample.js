import { LightningElement } from 'lwc';

export default class CheckboxExample extends LightningElement {
    
    courses = [
        {label : 'Java', value : 'java'},
        {label : 'Salesforce', value : 'salesforce'},
        {label : 'C++', value : 'c'}
    ]

    defaultCourse = [];

    defaultHobbies = ["playing"];

    get options(){
        return [
            {label : "Playing", value : "playing"},
            {label : "Sleeping", value : "sleeping"},
            {label : "Reading", value : "reading"}
        ];
    }

    handleCheckbox(e){
        this.defaultHobbies = e.detail.value;
    }

    get selectedHobbies(){
        return this.defaultHobbies.length == 0 ? 'None' : this.defaultHobbies;
    }
}