import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import Top from './Top';

function Main(){
	// UI
	return (
		<View style={styles.main}>
            <Top />
		</View>
	)
}

export default Main;