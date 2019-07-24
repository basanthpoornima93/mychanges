import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class SectionListEx extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 250, backgroundColor: 'white', marginTop: 30, padding: 3 }}>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 35, width: 40, margin: 3, backgroundColor: '#f8f8ff', borderRadius: 40 }}>
                                <Icon name={"microphone"} size={25} style={{ color: '#800080', justifyContent: 'center', alignSelf: 'center' }} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Audio</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 35, width: 40, margin: 3, backgroundColor: '#f8f8ff', borderRadius: 40 }}>
                                <Icon name="video-camera" size={25} style={{ color: '#006400', justifyContent: 'center', alignSelf: 'center' }} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Video</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 35, width: 40, margin: 3, backgroundColor: '#f8f8ff', borderRadius: 40 }}>
                                <Icon name="code" size={25} style={{ color: '#000080', justifyContent: 'center', alignSelf: 'center' }} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Code</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 35, width: 40, margin: 3, backgroundColor: '#f8f8ff', borderRadius: 40 }}>
                                <Icon name="check-square-o" size={25} style={{ color: '#90ee90', justifyContent: 'center', alignSelf: 'center' }} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Choice</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row', height: 60, width: 200, backgroundColor: 'red', justifyContent: 'space-between', padding: 9, marginTop: -8 }}>
                            <Icon name="check-square-o" size={25} style={{ color: 'white', justifyContent: 'center', alignSelf: 'center' }} />
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Choice</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', padding: 10, borderRadius: 0.5, elevation: 0.5 }}>
                        <View style={{ flexDirection: 'row', height: 60, width: 200, backgroundColor: '#008000', justifyContent: 'space-between', padding: 9, marginTop: -8 }}>
                            <Icon name="video-camera" size={25} style={{ color: 'white', justifyContent: 'center', alignSelf: 'center' }} />
                            <Text style={{ fontSize: 18, color: 'black', margin: 3, alignSelf: 'center' }}>Choice</Text>
                        </View>
                        <View style={{ margin: 3, height: 30, width: 40, backgroundColor: '#f5f5f5', borderRadius: 10, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center' }}>25</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}