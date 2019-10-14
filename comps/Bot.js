import React from 'react';
import {View, Alert, Button, TextInput} from 'react-native';
import styles from '../styles/BotStyles';


function Bot(){

  //const = permanently set variable maker
  const [value, onChangeText] = React.useState('send a text here');

	// UI
	return (

		<View style={styles.bot}>
    
    <TextInput
      style={styles.txtinp}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <Button
      style={styles.btn}
      title="Send"
      // MAKE SURE IMPORT Alert from 'react-native'
      onPress={() => Alert.alert(
      
      // TITLE OF ALERT
      'Alert',

      // THE VALUE OF THE INPUT
      value,

      // OK BUTTON
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],

    
      {cancelable: false}
      )} />

		</View>
	)
}

export default Bot;