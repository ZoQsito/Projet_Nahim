import React, { Component }  from "react";
import ContactsList from "./ContactsList";

class ContactListScreen extends Component{
    static navigationOptions = {
        title:'Home'
    }
    goToContactDetails = contact =>{
        const {navigation} = this.props 
        navigation.navigate("viewContact", {contact})
    }
    render(){
        return <ContactsList
        goToContactDetails={this.goToContactDetails}/>
    }

}

export default ContactListScreen