import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Day from './day';

export default class List extends React.Component{

    getDailyAverage(){
        return this.props.weeklyRuns.reduce((tot, cur) => { return tot + cur.distance; }, 0) / this.props.weeklyRuns.length;
    }

    render(){
        return (
            <View style={styles.container}>
                { this.props.weeklyRuns.map(r => { return (
                        <Day key={ r.day } day={ r.day } distance={ r.distance } average={ this.getDailyAverage() }>
                        </Day>
                    );
                }) }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 62,
        backgroundColor: '#673AB7',
        alignItems: 'center',
        justifyContent: 'center'
    }
});