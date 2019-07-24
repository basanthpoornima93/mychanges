import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie'

export default class Chart extends Component {
    render() {
        return (
            <View>
                <Text> Pie Chart</Text>
                <Pie
                    radius={100}
                    innerRadius={50}
                    series={[10, 20, 30, 40]}
                    colors={['red', 'lime', 'blue', 'yellow']} />
                {/* <Pie
                    radius={100}
                    innerRadius={60}
                    series={[10, 20, 30, 40]}
                    colors={['#ffff00', '#87cefa', '#ff0000', '#9acd32']} />
                <View> */}
                    {/* <Pie
                    radius={50}
                        innerRadius={45}
                        series={[10, 20, 30, 40]}
                        colors={['red']}
                    />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>60%</Text>
                    </View>
                </View> */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
})