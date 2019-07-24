import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            decrease: 0
        }
        // console.warn('constructor')
    }
  
    upOnChange = (ev) => {
        this.setState({ 'count': this.state.count + 1 })
    }
    downOnChange = () => {
        this.setState({ 'decrease': this.state.decrease + 1 })
    }
 
    render() {
        // console.warn('render Mathod')
        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', color: 'skyblue', fontWeight: '600', fontSize: 30 }}>
                    Lifecycle Methods
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name='thumbs-up' onPress={this.upOnChange} style={{ fontSize: 20, color: '#0000ff', margin: 20 }} />
                        <Text style={{ margin: 20, fontSize: 20 }}>{this.state.count} </Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'column' }}>
                            <Icon name='thumbs-down' onPress={this.downOnChange} style={{ fontSize: 20, color: '#0000ff', margin: 20 }} />
                            <Text style={{ margin: 20, fontSize: 20 }}>{this.state.decrease} </Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}