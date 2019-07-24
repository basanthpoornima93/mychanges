import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropExtends from '../PropExtends';
import CustomButton from '../Components/Compound'

export default class Props extends Component {
    constructor() {
        // super(props)
        // this.state = {
        //     valx: 0,
        //     valy: 1000
        // };
        // setInterval(() => {
        //     this.setState({ valx: this.state.valx + 1 });
        //     this.setState({ valy: this.state.valy - 1 });
        // }, 1000)
        super()
        this.state = {
            productCount: 0
        }
    }

    addProduct = () => {
        this.setState({ 'productCount': this.state.productCount +1 
    })
    }

    render() {
        return (
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            //     <Text>{"I am valuex, Goint to increment now" + this.state.valx} </Text>
            //     <Text>{"I am value Y,Going to decrease now" + this.state.valy} </Text>
            // </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <CustomButton onPress={this.addProduct} />
                <Text>{this.state.productCount+1} </Text>
            </View>
        )
    }
}