import React from 'react';
import {View} from 'react-native';
import styles from '../styles/MainStyles';
import Bot from './Bot'


function Main(){
	// UI
	return (
		<View style={styles.main}>
			<Bot />
		</View>
	)
}

export default Main;