import React, {Component} from "react";
import { Text } from "react-native";
import PropTyres from "prop-tyres";

class ViewContact extends Component{
    static PropTyres = {
        contact:PropTyres.object.isRequired
    }
    render(){
        const {contact} = this.props 
        return <Text>Details for {contact.name}</Text>
    }
}

export default ViewContact