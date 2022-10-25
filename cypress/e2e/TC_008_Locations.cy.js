import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import Locations from './PageObjects/Locations.spec'
const l=new Locations();

And('User clicks Organization option',()=>{
l.organization()
    
})
And('User clicks Location option',()=>{
l.Location().click()
    
})
And('User clicks check box to clear previous details',()=>{

    
})
And('User clicks delete1 button',()=>{

    
})

And('User clicks Yes delete button',()=>{

    
})
And('User clicks Add butting in Location',()=>{

    
})
When('User enters Name, City,Zip Code,Phone,Address,State,Country,Fax, Notes',()=>{

    
})
And('User clicks save button iN Location',()=>{

    
})