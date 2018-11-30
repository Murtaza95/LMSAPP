import React,{Component}from 'react';
import{Text,View,Alert,Button,StyleSheet,Image }from 'react-native';
import{Card,Tile,Icon,Avatar} from'react-native-elements';
import{SafeAreaView} from 'react-navigation';
import {ScrollView} from'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

class Home extends Component
{
    static navigationOptions={
        title: 'Home'
    };
    render(){
        
        return(
          <ScrollView>
          <Card title="Learning Management System Modules">
                      <Card>
                  <View style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={require('./images/user2.png')}
                      
                    />
                    <Text>Student Profile</Text>
                  </View>
                  </Card>

                  <Card>
                  <View style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={require('./images/result.png')}
                    />
                    <Text>Student Examination Record</Text>
                  </View>
                  </Card>

                  <Card>
                  <View style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={require('./images/dairy.png')}
                    />
                    <Text>Daily Home Work Diary</Text>
                  </View>
                  </Card>

                  <Card>
                  <View style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={require('./images/fee.png')}
                    />
                    <Text>Fee Legder Book</Text>
                  </View>
                  </Card>

                  <Card>
                  <Avatar
                    size="large"
                    rounded
                    source={require('./images/logo.png')}
                    onPress={() => Alert.alert('Hi')}
                    activeOpacity={0.7}
                  />  
          </Card>
        
          </Card>
          </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1 
     },
     Image:{
        //margin:10,
        width:10,
        height:10
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
export default Home;