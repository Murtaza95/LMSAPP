import React,{Component} from 'react';
import {View,Platform,Image,StyleSheet,Text,NetInfo,ToastAndroid} from 'react-native';
import{createStackNavigator,createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {ScrollView} from'react-native-gesture-handler';
import Home from './HomeComponent';
import Student from './Student';
import Exam from './ExamComponent';
import SMS from './SMSComponent';
import About from './AboutComponent';


const HomeNavigator = createStackNavigator({
   Home: { screen: Home },

},
{

    navigationOptions: ({navigation})=>({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft:<Icon name='menu' size={24}
            color='white'
            onPress={()=> navigation.toggleDrawer( )}
            />
    })
}
);
const SMSNavigator = createStackNavigator({
    SMS: { screen: SMS },
 
 },
 {
 
     navigationOptions: ({navigation})=>({
         headerStyle: {
             backgroundColor: "#512DA8"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
             color: "#fff"            
         },
         headerLeft:<Icon name='menu' size={24}
             color='white'
             onPress={()=> navigation.toggleDrawer( )}
             />
     })
 }
 );
 const AboutNavigator = createStackNavigator({
    About: { screen: About },
 
 },
 {
 
     navigationOptions: ({navigation})=>({
         headerStyle: {
             backgroundColor: "#512DA8"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
             color: "#fff"            
         },
         headerLeft:<Icon name='menu' size={24}
             color='white'
             onPress={()=> navigation.toggleDrawer( )}
             />
     })
 }
 );
const ExamNavigator = createStackNavigator({
    Exam: { screen: Exam },
 
 },
 {
 
     navigationOptions: ({navigation})=>({
         headerStyle: {
             backgroundColor: "#512DA8"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
             color: "#fff"            
         },
         headerLeft:<Icon name='menu' size={24}
             color='white'
             onPress={()=> navigation.toggleDrawer( )}
             />
     })
 }
 );
const StudentNavigator = createStackNavigator({
    Student: { screen: Student },
 
 },
 {
 
     navigationOptions: ({navigation})=>({
         headerStyle: {
             backgroundColor: "#512DA8"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
             color: "#fff"            
         },
         headerLeft:<Icon name='menu' size={24}
             color='white'
             onPress={()=> navigation.toggleDrawer( )}
             />
     })
 }
 );

const CustomDrawerContentComponent=(props) =>(
    <ScrollView>
        <SafeAreaView style={styles.container}
        forceInset={{top:'always', horizontal:'never'}}>
        <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')}
        style={styles.drawerImage}/>
        </View>
        <View style={{flex:2}}>
    <Text style={styles.drawerHeaderText}>School Management System</Text>
        </View>
        </View>
        <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
    );
    
    const MainNavigator=createDrawerNavigator({
        Home:{
            screen: HomeNavigator,
            navigationOptions:{
                title:'Home',
                drawLable:'Home',
                drawerIcon:({tintColor})=>(
                    <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}  
                    />
                  )
            }
        },
        Studnet:{
            screen: StudentNavigator,
            navigationOptions:{
                title:'Student',
                drawLable:'Student',
                drawerIcon:({tintColor})=>(
                    <Icon
                    name='user'
                    type='font-awesome'
                    size={24}
                    color={tintColor}  
                    />
                  )
            }
        },
        Exam:{
            screen: ExamNavigator,
            navigationOptions:{
                title:'Examination',
                drawLable:'Examination',
                drawerIcon:({tintColor})=>(
                    <Icon
                    name='book'
                    type='font-awesome'
                    size={24}
                    color={tintColor}  
                    />
                  )
            }
        },
        SMS:{
            screen: SMSNavigator,
            navigationOptions:{
                title:'SMS/Notifications',
                drawLable:'SMS',
                drawerIcon:({tintColor})=>(
                    <Icon
                    name='comment'
                    type='font-awesome'
                    size={24}
                    color={tintColor}  
                    />
                  )
            }
        },
        About:{
            screen: AboutNavigator,
            navigationOptions:{
                title:'About Macro Code',
                drawLable:'Abour MC',
                drawerIcon:({tintColor})=>(
                    <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}  
                    />
                  )
            }
        },
        
    },
    {
            initialRouteName:'Home',
            drawerBackgroundColor:'#D1E4C9',
            contentComponent:CustomDrawerContentComponent
        });
class Main extends Component{

    
    render(){
        return(
            <View style={{flex: 1,paddingTop: Platform.OS==='ios'? 0: Expo.Constants.statusBarHeight}}>
            <MainNavigator/> 
             </View>
        );
    }


}
const styles=StyleSheet.create({
    container:{
       flex:1 
    },
    drawerHeader:{
        backgroundColor:'#512DA8',
        height:140,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row'

    },
    drawerHeaderText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
       

    },
    drawerImage:{
        margin:10,
        width:75,
        height:30


    }

})
export default Main;