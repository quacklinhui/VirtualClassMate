import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, View } from 'react-native';
import logo from './../../images/VirtualClassMate_FullLogo.png';

function CreateRoomPopUp() {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>    

        </View>
  
    )
}

export default CreateRoomPopUp;

const styles = StyleSheet.create({
    button: {
      marginVertical: 10,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: '100%'
    },
    buttonText: {
      color: Colors.white,
      fontSize: 14,
      fontWeight: '600',
      textTransform: 'capitalize'
    }
  });