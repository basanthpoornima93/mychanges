
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,AppRegistry} from 'react-native';
import Communications from 'react-native-communications';

export default class Call extends Component{
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => Communications.phonecall('9704405702', true)}>
              <View style={styles.holder}>
                <Text style={styles.text}>Make phonecall</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.email(['basanthpoornima@gmail.com', 'basanthpoornima93@gmail.com'],'ghg','null','My Subject','My body text')}>
              <View style={styles.holder}>
                <Text style={styles.text}>Send an email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
              <View style={styles.holder}>
                <Text style={styles.text}>Send a text/iMessage</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.web('https://github.com/facebook/react-native')}>
              <View style={styles.holder}>
                <Text style={styles.text}>Open react-native repo on Github</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
} 

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(253,253,253)',
      },
      holder: {
        flex: 0.25,
        justifyContent: 'center',
      },
      text: {
        fontSize: 32,
      },
    });
     
    AppRegistry.registerComponent('Call', () => Call);