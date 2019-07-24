import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';


export default class FlatListEx extends Component {
    render() {
        const list = {
            character: [
                { key: "Basanth", profile: "Mobile Developer" },
                { key: "Sonal", profile: "Mobile Developer Senior" },
                { key: "Mounika", profile: "Web Developer" },
                { key: "Sai", profile: "Web Developer" },
                { key: "Manu", profile: "Social Developer" },
                { key: "Krupa", profile: "Frent-end Developer" },
                { key: "Preethi", profile: "css Developer" },
                { key: "Lath", profile: "News Gernalist " },
                { key: "Laxmi", profile: "Chef and other knowledge" },
                { key: "Suji", profile: "Law Social Networking" },
                { key: "Divya", profile: "Law Social Networking" },
                { key: "Pavani", profile: "Law Social Networking" },
                { key: "Swarna", profile: "Law Social Networking" },
                { key: "Havila", profile: "Law Social Networking" },
                { key: "Swathi", profile: "Law Social Networking" },
                { key: "Swapna", profile: "Law Social Networking" },
                { key: "Sandhya", profile: "Law Social Networking" }
            ]
        }
        return (
            <View>
                {list.character.length > 0 ?
                    <FlatList
                        data={list.character}
                        renderItem={({ item }) => <View>
                            <Text style={{ fontSize: 40, color: 'black', fontWeight: '600' }}>
                                {item.key} </Text>
                            <Text style={{ fontSize: 20, color: 'skyblue' }}>
                                {item.profile}
                            </Text>
                        </View>

                        }
                    /> :
                    <Text>
                        Sorry Data is not found
                    </Text>
                }
            </View>
        )
    }
}