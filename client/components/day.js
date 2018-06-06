import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import AverageCompare from './averageCompare';

// Get screen width
const { width } = Dimensions.get('window');

export default class Day extends Component {

    //   props: {
    //     symbol: string,
    //     name: string,
    //     price: number,
    //     change: number,
    //     active: boolean,
    //     onPress: Function,
    //   };

    render() {
        const {
            day,
            distance,
        } = this.props;
        return (
            <View
                style={[styles.container]}
            >
                <View style={styles.row}>
                    <Text style={styles.text} numberOfLines={1}>
                        { day }
                    </Text>
                    <View style={styles.right}>
                        <Text style={styles.text} numberOfLines={1}>
                            { distance } km
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={[styles.text]} numberOfLines={1}>
                        
                    </Text>
                    <View style={styles.right}>
                        <AverageCompare value={ distance - this.props.average } />
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        width: width / 2 + 10,
    },
    row: {
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    name: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        fontWeight: '300',
    },
});