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
				{ day: "Monday", distance: 0 },
				{ day: "Tuesday", distance: 0 },
				{ day: "Wednesday", distance: 0 },
				{ day: "Thursday", distance: 0 },
				{ day: "Friday", distance: 0 },
				{ day: "Saturday", distance: 0 },
				{ day: "Sunday", distance: 0 },
			],
			dailyAverage: 0
		};
	}

	componentDidMount(){
		fetch('http://10.0.2.2/weeksRuns')
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