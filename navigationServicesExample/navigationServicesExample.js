import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationServicesExample extends NavigationMixin(LightningElement) {

    handleHomePageClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'home'
            }
        })
    }

    handleChatterClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'chatter'
            }
        });
    }

    handleContactListClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state : {
                filterName : '00B5g0000097UkXEAU'
            }
        })
    }

    handleNewContactClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        })
    }

    handleNewContactWithDefaultClick(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName : 'Lightning',
            LastName : 'Navigation',
            Phone : '7891089874'
        });

        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state : {
                defaultFieldValues : defaultValue
            }
        })
    }

    handleContactDetailClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage', 
            attributes : {
                recordId : '0035g000003MckQAAS',
                objectApiName : 'Contact',
                actionName : 'view'
            }
        })
    }

    handleContactEditClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : 'a005g00002pxXGoAAM',
                objectApiName : 'Student__C',
                actionName : 'edit'
            }
        })
    }

    handleWebpageClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : "http://www.ibirdsservices.com/"
            }
        })
    }

    handletabItemClick(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes : {
                apiName : 'Country_Example'
            }
        })
    }
}