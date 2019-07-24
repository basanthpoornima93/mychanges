import React, { Component } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, Image, BackHandler, ScrollView, DatePickerAndroid, ImageBackground, TimePickerAndroid } from 'react-native'
import styles from './styles';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
    { "name": "Fresher" },
    { "name": "Experiance" },
    { "name": "Part-time" },
    { "name": "Full-time" }
]
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: '',
            mobile: '',
            country: '',
            applyDate: '',
            password: '',
            confpassword: '',
            selectSignIn: true,
            msg: '',
            isMsg: false,
            isVisibilty: false,
            details: [],
            isconfirmpassword: true,
            isPasswordShow: true,
            data: [],
            value: '',
            obj: '',
            gender: '',
            chosenDate: new Date(),
            chosenAndroidTime: '00:00',
            androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}`,
            value: 50,
            nameValid: true
        };
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    setDateAndroid = async () => {
        try {
            const {
                action, year, month, day,
            } = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({ androidDate: `${day}/${month + 1}/${year}` });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };
   
    submit = () => {
        const obj = {}
        obj.name = this.state.fullName;
        obj.email = this.state.email;
        obj.mobile = this.state.mobile;
        obj.country = this.state.country;
        obj.applyDate = this.state.applyDate;
        obj.password = this.state.password;
        obj.confpassword = this.state.confpassword;
        obj.gender = this.state.gender;
        let arr = [];
        arr.push(obj);
        const res = obj;
        console.warn("res", res);
        this.setDate = this.setDate.bind(this);
        
        this.setState({ selectSignIn: false });
        const IsEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
        const isMobileValid = /^[0]?[789]\d{9}$/.test(this.setState.mobileno);
        if (this.state.fullName === null || this.state.fullName === '') {
            this.setState({ selectSignIn: true, msg: "Please enter Full Name", isMsg: true })
        } else {
            if (this.state.fullName.length < 5) {
                this.setState({ selectSignIn: true, msg: "Name shouls be more than 5 character", isMsg: true })
            }
        } if (this.state.email === null || this.state.email === '' || !IsEmailValid) {
            if (this.state.email === null || this.state.email === '') {
                this.setState({ selectSignIn: true, msg: "Please enter your Email-id is", isMag: true })
            } else {
                this.setState({ selectSignIn: true, msg: "Plase enter valid Email", isMsg: true })
            }
        } else if (this.state.password === null || this.state.password === '') {
            this.setState({ selectSignIn: true, msg: "Plase Enter Password", isMag: true })
        } else if (this.state.password.length < 4) {
            this.setState({ selectSignIn: true, msg: "Password Length is more than 4character", isMsg: true })
        } else if (this.state.password = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            this.setState({ selectSignIn: true, msg: "Password should be mix with special characters", isMsg: true })
        } else if (this.state.password === this.state.confpassword) {
            this.setState({ isVisibilty: true });
            this.myFunction();
        } else {
            this.setState({ selectSignIn: true, msg: "Plase enter correct Confirmpassword", isMag: true });
        } if (this.state.mobile === null || this.state.mobile === '' || !isMobileValid) {
            if (this.state.mobile === null || this.state.mobile === '') {
                this.setState({ selectSignIn: true, msg: "Plase Enter your Mobile number", isMsg: true })
            } else if (this.state.mobile.length < 9) {
                this.setState({ msg: "Mobile number should be minimum  10 numbers" })
            }
        } else if (this.state.country === null || this.state.country === '') {
            this.setState({ selectSignIn: true, msg: "Country Field should not be empty", isMsg: true })
        }
        else if (this.state.applyDate === null || this.state.applyDate === '') {
            this.setState({ selectSignIn: true, msg: "Please select applyDate", isMsg: true })
        } else {
            this.setState({ isVisibilty: true })
        } if (this.state.gender === null || this.state.gender === '') {
            this.setState({ selectSignIn: true, msg: "Plase select gender", isMsg: true })
        }else{
            alert("Your details have been submited successfully")
        }
    }
    render() {
        { this.state.data }
        return (
            <View >
                <ScrollView>
                    <View >
                        {/* <Image
                            source={require('../../images/profile.jpg')}
                            style={styles.proImg}
                        /> */}
                         <Image
                            source={{uri:'https://picsum.photos/id/1035/200/200'}}
                            style={styles.proImg}
                        />

                        {this.state.isMsg ? <Text style={{ color: 'red' }}>{this.state.msg}</Text> : null}
                    </View>
                    <ImageBackground
                        source={require('../../images/back.png')}
                        style={styles.img}>
                        <View style={styles.mainContainer}>
                            <View>
                                <Text style={styles.mainText}>Registration</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.nameView}>Full Name</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="FullName"
                                        underlineColorAndroid="transparent"
                                        maxLength={35}
                                        onChangeText={(text) => this.setState({ fullName: text })} />
                                </View>
                                <View >
                                    <Text style={styles.nameView}>Position you are applying for</Text>
                                    <Picker mode="dropdown" style={{ height: 20, backgroundColor: 'white', width: '80%' }}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                                    >
                                        {
                                            data.map((item) => {
                                                return (
                                                    <Picker.Item label={item.name} value={item.name} key={item.name} />
                                                );
                                            })
                                        }
                                    </Picker>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.nameView}>Email</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="Please enter your"
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.setState({ email: text })} />
                                </View>
                                <View>
                                    <Text style={styles.nameView}>Phone number</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="Please enter your"
                                        underlineColorAndroid="transparent"
                                        maxLength={10}
                                        secureTextEntry={this.state.isMobileValid}
                                        keyboardType={'numeric'}
                                        // returnKeyType="next"
                                        onChangeText={(value) => this.setState({ mobile: value })} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.nameView}>Country</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="Please enter your"
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.setState({ country: text })} />
                                </View>
                                <View>
                                    <Text style={styles.nameView}>Applyed Date</Text>
                                    <TouchableOpacity onPress={() => this.setDateAndroid()}>
                                        <View style={{ height: 40, width: 180, backgroundColor: 'transparent', margin: 3, elevation: 1, borderRadius: 10, flexDirection: 'row' }}>
                                            <Icon name="calendar" size={18} style={{ justifyContent: 'flex-end', alignSelf: 'flex-end', padding: 5, margin: 5 }} />
                                            <Text style={styles.dateView}>
                                                {this.state.androidDate}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.nameView}>Password</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="Please enter your"
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={this.state.isPasswordShow}
                                        onChangeText={(text) => this.setState({ password: text })} />
                                </View>
                                <View>
                                    <Text style={styles.nameView}>Confirm password</Text>
                                    <TextInput
                                        style={styles.fNameContainer}
                                        placeholder="Please enter your"
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={this.state.isconfirmpassword}
                                        onChangeText={(text) => this.setState({ confpassword: text })} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nameView}>Gender</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioGroup
                                        onSelect={(index, value) => this.onSelect(index, value)}
                                    >
                                        <RadioButton value={'item1'} >
                                            <Text>Male</Text>
                                        </RadioButton>
                                        <RadioButton value={'item2'} >
                                            <Text>Female</Text>
                                        </RadioButton>
                                        <RadioButton value={'item3'}>
                                            <Text>Other</Text>
                                        </RadioButton>
                                    </RadioGroup>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.touchableView} onPress={() => this.submit()}>
                                    <Text style={styles.submitView}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground >
                </ScrollView>
            </View >
        )
    }
}
