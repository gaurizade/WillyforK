import React from 'react';
import { Text, View, TouchableOpacity , StyleSheet} from 'react-native';
import * as Permission from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermission : null,
      scanned : false,
      scannedData : '',
    }
  }

  getCameraPermission = async ()=> {
    const {status} =await Permission.askAsync(Permission.CAMERA);

    this.setState({
      hasCameraPermission: status === 'granted'
    })

  }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.displayText} >Issue or Return</Text>
          <TouchableOpacity 
          onPress ={this.getCameraPermission()}
          style={styles.buttonText
          
          }> Scan QR Code</TouchableOpacity>
        </View>
      );
    }
  }

  const styles= StyleSheet.create({
    displayText : {
      fontSize:15
    },
    buttonText :{
      backgroundColor: "green",
      padding:10,
      margin : 10
    }
  })