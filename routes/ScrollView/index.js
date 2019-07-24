import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class Scrollview extends Component {
    render() {
        const data = {
            character: [
                { id: 1, name: 'Krupa', desc: "Excellent And Sweet" },
                { id: 2, name: 'Preethi', desc: "Talented And Noughty" },
                { id: 3, name: 'Manu', desc: "Expert and Loving" },
                { id: 4, name: "Mani", desc: "HardWorker ans sensier" },
                { id: 5, name: "Shar", desc: "Multi-Talent and Good" },
                { id: 6, name: "Preama", desc: "Super and goodlookin" },
                { id: 7, name: "Mamatha", desc: "Genious and perfect" }
            ]
        };
        const Character = (props) => {
            return (
                <View>
                    <Text style={{ fontSize: 60, color: 'black', fontWeight: '600' }}>
                        {props.nm}
                    </Text>
                    <Text style={{ fontSize: 30, color: 'green', fontWeight: '600' }}>
                        {props.profile}
                    </Text>
                </View>
            );
        }
        return (
            <ScrollView>
                {data.character.length > 0 ?
                    data.character.map((item) => (
                        <Character key={item.id}
                            nm={item.name}
                            profile={item.desc}
                        />
                    )) :
                    <Text>
                        Sorry No Data available here
                        </Text>}
            </ScrollView>
        )
    }
}