import React,{Component}from 'react';
import{Text,View,Alert}from 'react-native';
import{Card,Tile} from'react-native-elements';
import {ScrollView} from'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

class SMS extends Component
{
    static navigationOptions={
        title: 'SMS'
    };
    render(){
        
        return(
            <Animatable.View animation="fadeInRightBig" duration={2000}>  
            <Tile
            title='Search'
            caption='Search Student Data by Roll Number'
            featured
            onPress={() =>Alert.alert('Presses') }
            imageSrc={require('./images/user.png')}
            />
            </Animatable.View>
        );
    }
}
export default SMS;