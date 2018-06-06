import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Chart from './components/chart';
import List from './components/list';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			testText: "NOTHING YET",
			weeklyRuns: [
				{
					day: "Monday",
					distance: 1
				},
				{
					day: "Tueday",
					distance: 1
				},
				{
					day: "Wednesday",
					distance: 0
				},
				{
					day: "Thursday",
					distance: 1
				},
				{
					day: "Friday",
					distance: 2
				},
				{
					day: "Saturday",
					distance: 5
				},
				{
					day: "Sunday",
					distance: 3
				},
			]
		};
	}

	componentDidMount(){
		// fetch('http://10.0.2.2/')
		// 	.then((response) => response.json())
		// 	.then((responseJson) => {
		// 		this.setState({
		// 			testText: responseJson.body
		// 		}, () => {});
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	})
		
		// fetch('http://10.0.2.2/weeksRuns')
		// 	.then((response) => response.json())
		// 	.then((responseJson) => {
		// 		this.setState({
		// 			weeklyRuns: responseJson.activities.map(x => x.name)
		// 		}, () => {});
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	})
	}

	render() {
		return (
			<View style={styles.container} >
				{/* <Text>{ this.state.testText }</Text>
				<Text>{ JSON.stringify(this.state.weeklyRuns)	 }</Text> */}
				<Chart weeklyRuns={ this.state.weeklyRuns }></Chart>
				<List weeklyRuns={ this.state.weeklyRuns }></List>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});