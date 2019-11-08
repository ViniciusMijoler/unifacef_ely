import { StyleSheet, Platform } from 'react-native';

export default (colorPrimary) => StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        paddingTop: 5,
        paddingBottom: 5,
        paddingStart: 5,
        paddingEnd: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colorPrimary,
    },
    icon: {
        alignSelf: 'flex-start',
        color: '#fff',
        height: 50,
        width: 50,
        padding: 15,
    },
    iconIvisible: {
        color: 'transparent',
        height: 50,
        width: 50,
        padding: 15,
    },
    title: {
        flex: 1,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 50
    },  
})