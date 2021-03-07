import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
           hasCameraPermissions: null,
           scanned: false,
           scannedData: '',
           buttonState: 'normal'
        }
    }
    getCameraPermissions=async(ID)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions: status==="granted",
            buttonState: ID,
            scanned: false
        })
    }
    handleBarCodeScanned= async({type,data})=>{
        const {buttonState} = this.state.buttonState
        if(buttonState==="clicked"){
            this.setState({
                scanned: true,
                scannedBookID: data,
                buttonState: 'normal',
            })
        }else if(buttonState==="normal"){
            this.setState({
                scanned: true,
                scannedStudentID: data,
                buttonState: 'normal',
            })
        }
       
    }
    render(){
        return(
          <View style = {{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={styles.scanButton}
                onPress={this.getCameraPermissions}
                title = "Barcode Scanner">
                <Text style={{alignText: 'center', fontWeight: 4, fontSize: 25,
             fontFamiy: 'fantasy'}}>
                   Scan QR Code
                </Text>
              </TouchableOpacity>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    scanButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 2,
      backgroundColor: 'blue',
      alignItems: 'center'
    },
  });