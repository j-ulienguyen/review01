import React, {useState} from 'react';
import {View,Text, Picker} from 'react-native';
import styles from '../styles/MidStyles';

function Mid(){
    const [newColor, setNewColor] = useState("red");

	// UI
	return (
        <View style={[styles.mid,{backgroundColor: newColor}]}>
            <Picker
                selectedValue = {newColor}
                style = {styles.picker}
                onValueChange = {(itemValue)=>{
                    setNewColor(itemValue)
                }}>
                <Picker.Item label="Color 1" value={newColor}/>
                <Picker.Item label="Color 2" value="blue"/>
                <Picker.Item label="Color 3" value="green"/>
                <Picker.Item label="Color 4" value="purple"/>
            </Picker>
        </View>
	)
}

export default Mid;