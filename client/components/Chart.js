import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Line from './chart/line';

export default class Chart extends React.Component{

    getCumulativeDistance(){
        let newValues = [0];
        for(let x of this.props.weeklyRuns){
            newValues.push(
                newValues[newValues.length - 1] + (x.distance == null ? 0 : parseFloat(x.distance))
            )
        }

        return newValues
    }

    render(){

        const cumulativeDistance = this.getCumulativeDistance();

        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.title]}>
                    Weekly Total: { cumulativeDistance[cumulativeDistance.length - 1] }km
                </Text>
                <Text style={[styles.text, styles.average]}>
                    Daily Average: { this.props.dailyAverage.toFixed(1) }km
                </Text>
                <Line values={ cumulativeDistance }></Line>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 38,
        backgroundColor: '#ececec'
    },
    text: {
        fontSize: 24,
        fontWeight: '300',
        position: 'absolute',
        left: 20,
    },
    title: {
        top: 20
    },
    average: {
        top: 60
    }
});