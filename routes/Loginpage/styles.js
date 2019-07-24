import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default {
    mainContainer: {
        height: 520,
        width: width - 20,
        backgroundColor: 'white',
        marginLeft: 7,
        top: 5,
        borderRadius: 5
    },
    mainText: {
        fontWeight: '600',
        color: 'black',
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    nameView: {
        fontWeight: '600',
        color: 'black',
        fontSize: 14,
        margin: 3
    },
    proImg: {
        height: 110,
        width: 110,
        borderRadius: 60,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    img: {
        flex: 1
    },
    fNameContainer: {
        height: 40,
        width: 180,
        backgroundColor: 'transparent',
        margin: 3,
        elevation: 1,
        borderRadius: 10
    },
    pickerView: {
        height: 40,
        width: 160,
        elevation: 5,
        borderRadius: 10
    },
    dateView: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 15,
        padding:5
    },
    touchableView: {
        backgroundColor: '#075fed',
        height: 40,
        width: 350,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    submitView: {
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: '600'
    }
};