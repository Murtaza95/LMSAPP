import React,{Component}from 'react';
import{Text,View,Alert,Modal,StyleSheet,Button,FlatList}from 'react-native';
import{Card,Tile,Input} from'react-native-elements';
import {ScrollView} from'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


class Student extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          showModall: false,
          roll:' ',
          data:[],
        }
      }
    static navigationOptions={
        title: 'Search Student'
    };
    
    
    handleDefaulters() {
     fetch("https://webapp-181130144828.azurewebsites.net/rest/student")
     .then((response) => response.json())
     .then((res) => {
    //console.warn("Defaulters Data:",res)
    this.setState({
        data:res,
        //month:res.Month,
       // class:res.Class,
        
    })
   })
   this.toggleModall();
}

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
      }
      toggleModall() {
        this.setState({ showModall: !this.state.showModall });
      }
     

      _onPressButtonPOST() {
        fetch("https://webapp-181130144828.azurewebsites.net/rest/student/"+this.state.roll)
        .then((response) => response.json())
        .then((res) => {
          this.setState({
            name:res.Name,
            roll:res.Roll,
            class:res.Class,
      
          })
          
                Alert.alert(
               "Fetched Data",
               "Name :"+this.state.name+"\n"+"Class:"+this.state.class+"\n"+"Roll Number:"+this.state.roll
                //"Response Body -> " + JSON.stringify(responseData)
               
            )
        })
        .done();
      }
       renderDefaulter = ({ item, index }) => {

        return (
          <View key={index} style={{ margin: 10 }}>
           <Text style={{ fontSize: 14 }}>Name: {item.Name} </Text>
            <Text style={{ fontSize: 13 }}>Fee of Month: {item.Month}</Text>
            <Text style={{ fontSize: 12 }}>Roll Number: {+ item.Roll} </Text>
            <Text style={{ fontSize: 12 }}>Class: {item.Class} </Text>
            <Text style={{ fontSize: 12 }}>Due Fee: {'PKR ' + item.Fee} </Text>
            <Text style={{ fontSize: 12 }}>Due Date: {item.DueDate} </Text>
            
          </View>
        );
      };
    render() {
       
    return (
        <ScrollView>
     <View style={{flex: 1, flexDirection: 'column', backgroundColor:'powderblue',}}>
    <Button 
    onPress={() => this.toggleModal()}
    title="Search Student"
    />
      </View>
      <View style={{flex: 2, flexDirection: 'column',backgroundColor:'skyblue'}}>
    <Button 
    onPress={() => this.handleDefaulters()}
    title="Defaulters"
    />
      </View>
      <Animatable.View animation="fadeInRightBig" duration={2000}> 
      <Modal animationType={"slide"} transparent={false}
      visible={this.state.showModal}
      onDismiss={() => this.toggleModal()}
      onRequestClose={() => this.toggleModal()}>
      <View style={styles.modal}>
    <Input
    placeholder='Enter Roll Number'
     leftIcon={{ type: 'font-awesome', name: 'user' }}
    onChangeText={(value) => { this.setState({ roll: value }) }}
            />
    <View style={styles.button}>
              <Button
                onPress={() => { this._onPressButtonPOST() }}
                color="#A9A9A9"
                title="Get Data"
              />
            </View>

      </View>
      </Modal>
      </Animatable.View>
      <Modal animationType={"slide"} transparent={false}
      visible={this.state.showModall}
      onDismiss={() => this.toggleModall()}
      onRequestClose={() => this.toggleModall()}>
      <View style={styles.modal}>
      <Card>
        <Text style={styles.TextData}>Defaulter List</Text>
      <FlatList
        data={this.state.data}
        renderItem={this.renderDefaulter}
        keyExtractor={item => item.Roll.toString()}
      />
      </Card>
      </View>
      </Modal>

     </ScrollView>
    );
   
  }
}

const styles = StyleSheet.create({
  dishActionContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },
  flexStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'powderblue'
   // margin: 20,
  },
  TextData:{
    justifyContent:'center',
    fontSize:20,
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    marginTop: 20,
  },
  container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default Student;