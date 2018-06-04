import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			testText: "NOTHING YET"
		};
	}

	componentDidMount(){
		return fetch('http://10.0.2.2/')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					testText: responseJson.body
				}, () => {});
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return (
			<View style={styles.container} >
				<Text>Open up App.js to start working on your app! </Text>
				<Text>Changes you make will automatically reload. </Text>
				<Text>Shake your phone to open the developer menu. </Text>
				<Text>{ this.state.testText }</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});