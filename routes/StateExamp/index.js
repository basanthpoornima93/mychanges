import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native'

export default class StateExamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 0,
            num: 0,
            ready: false
        }
    }
    onChangeMeth = (txt) => {
        let max = parseInt(txt);
        let ready = false;
        if (!isNaN(max) && max > 0) {
            // ready = !ready;
            this.setState({ max, ready: true });
        } else {
            this.setState({ ready, max: 0 });
        }
    }
    onPickButton = (ev) => {
        let num = Math.floor(Math.random() * this.state.max)+1 ;
        this.setState({ num });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <TextInput
                        onChangeText={this.onChangeMeth}
                        keyboardType='number-pad'
                        underlineColorAndroid="black"
                        defaultValue={this.state.max.toString(10)}
                        maxLength={3}
                    />
                </View>
                <View style={{ padding: 4, flex: 1 }}>
                    <Text style={{
                        fontSize: 20, color: 'black',
                        fontWeight: '600', justifyContent: 'center',
                        alignSelf: 'center', marginTop: 20
                    }}>{this.state.num} </Text>
                </View>
                <View>
                    {this.state.ready && (
                        <Button
                            title="Pick number"
                            // color='red'
                            onPress={this.onPickButton}
                        />
                    )}
                </View>
                <View>

                </View>
            </View>
        );
    }
}
