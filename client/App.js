import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Chart from './components/Chart';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			testText: "NOTHING YET",
			weeklyRuns: {}
		};
	}

	componentDidMount(){
		fetch('http://10.0.2.2/')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					testText: responseJson.body
				}, () => {});
			})
			.catch((error) => {
				console.error(error);
			})
		
		fetch('http://10.0.2.2/weeksRuns')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					weeklyRuns: responseJson.activities.map(x => x.name)
				}, () => {});
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return (
			<View style={styles.container} >
				<Text>{ this.state.testText }</Text>
				<Text>{ JSON.stringify(this.state.weeklyRuns)	 }</Text>
				<Chart></Chart>
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