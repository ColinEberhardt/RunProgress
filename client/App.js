import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Chart from './components/chart';
import List from './components/list';

import secretToken from './credentials';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			testText: "NOTHING YET",
			weeklyRuns: [
				{ day: "Monday", distance: null },
				{ day: "Tuesday", distance: null },
				{ day: "Wednesday", distance: null },
				{ day: "Thursday", distance: null },
				{ day: "Friday", distance: null },
				{ day: "Saturday", distance: null },
				{ day: "Sunday", distance: null },
			],
			dailyAverage: 0
		};
	}

	componentDidMount(){
		fetch('http://10.0.2.2/weeksRuns', {
			method: "POST",
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'strava-token': secretToken,
			}),
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				weeklyRuns: responseJson.weeklyRuns,
				dailyAverage: responseJson.dailyAverage
			}, () => {});
		})
		.catch((error) => {
			console.error(error);
		})
	}

	render() {
		return (
			<View style={styles.container} >
				<Chart weeklyRuns={ this.state.weeklyRuns } dailyAverage={ this.state.dailyAverage }></Chart>
				<List weeklyRuns={ this.state.weeklyRuns } dailyAverage={ this.state.dailyAverage }></List>
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