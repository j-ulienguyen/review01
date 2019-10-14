import React from 'react';
import {View,Text} from 'react-native'
import styles from '../styles/MainStyles';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot'

function Main(){
	// UI
	return (
		<View style={styles.main}>
      		<Top />
      		<Mid/>
		<Bot/>
		</View>
	)
}

export default Main;
