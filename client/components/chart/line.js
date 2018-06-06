import React, { Component } from 'react';
import {
    Dimensions,
    LayoutAnimation,
    StyleSheet,
    View,
    Platform,
    UIManager
} from 'react-native';
import {
    Group,
    Path,
    Surface,
    Shape
} from 'react-native/Libraries/ART/ReactNativeART';

export default class Line extends Component {

    //   props: {
    //     values: Array<number>,
    //     fillColor: string,
    //     strokeColor: string,
    //     strokeWidth: number,
    //   };

    constructor(props){
        super(props);
        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    static defaultProps = {
        fillColor: 'rgba(103, 58, 183, 1)',
        strokeColor: 'rgba(103, 58, 183, 0.25)',
        strokeWidth: 8,
    };

    state = {
        width: Dimensions.get('window').width,
        height: 0,
    };

    componentWillUpdate() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    onLayout = (event) => {
        const {
            nativeEvent: {
                layout: {
                    width,
                    height
                }
            }
        } = event;
        
        this.setState({
            width,
            height,
        })
    };

    buildPath = values => {
        const {
            strokeWidth,
        } = this.props;
        const {
            width,
            height,
        } = this.state;

        let firstPoint = true;
        // holds x and y coordinates of the previous point when iterating
        let previous = { x: 0, y: 0 };

        const minValue = Math.min(...values);
        const maxValue = Math.max(...values) - minValue;
        // step between each value point on horizontal (x) axis
        const stepX = width / (values.length - 1 || 1);
        // step between each value point on vertical (y) axis
        const stepY = maxValue
            ? (height - strokeWidth * 2) / maxValue
            : 0;
        // adjust values so that min value becomes 0 and goes to the bottom edge
        const adjustedValues = values.map(value => value - minValue);

        // start from the left bottom corner so we could fill the area with color
        let path = Path().moveTo(-strokeWidth, strokeWidth);

        adjustedValues.forEach((number, index) => {
            let x = index * stepX,
                y = -number * stepY - strokeWidth;
            if (firstPoint) {
                // straight line to the first point
                path.lineTo(-strokeWidth, y);
            }
            else {
                // make curved line
                path.curveTo(previous.x + stepX / 3, previous.y, x - stepX / 3, y, x, y);
            }
            // save current x and y coordinates for the next point
            previous = { x, y };
            firstPoint = false;
        });

        return path
            // line to the right bottom corner so we could fill the area with color
            .lineTo(width + strokeWidth, strokeWidth)
            .close();
    };

    render() {
        const {
            values,
            fillColor,
            strokeColor,
            strokeWidth
        } = this.props;
        const {
            width,
            height,
        } = this.state;
        return (
            <View
                style={styles.container}
                onLayout={this.onLayout}
            >
                <Surface width={width} height={height}>
                    <Group x={0} y={height}>
                        <Shape
                            d={this.buildPath(values)}
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                        />
                    </Group>
                </Surface>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});