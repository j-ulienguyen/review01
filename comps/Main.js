import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import Mid from './Mid';

function Main(){
	// UI
	return (
		<View style={styles.main}>
            <Mid/>
		</View>
	)
}

export default Main;