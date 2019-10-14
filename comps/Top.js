import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/TopStyles';

function Top(){

   const [themeState, setThemeState] = useState(false)

   var theme = null 

   if (themeState === true) {
      theme = (
         <View style={[styles.top,{backgroundColor:'#000'}]}>
            <Switch
               value = {themeState}
               onValueChange = {(itemValue, itemIndex) => setThemeState(itemValue)}>
            </Switch>
            <Text style = {{color: '#FFF'}}>Night Mode</Text>
         </View>
      )
   }

   if (themeState === false) {
      theme = (
         <View style={[styles.top,{backgroundColor:'#FFF'}]}>
            <Switch
               value = {themeState}
               onValueChange = {(itemValue, itemIndex) => setThemeState(itemValue)}>
            </Switch>
            <Text style = {{color: '#000'}}>Day Mode</Text>
         </View>
      )
   }
	// UI
	return (
		<View style={styles.top}>
         {theme}
		</View>
   )
  
  
}

export default Top;