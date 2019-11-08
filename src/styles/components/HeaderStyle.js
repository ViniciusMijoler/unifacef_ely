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
    containerTitle: {
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    imageCenter: {
        width: 200,
        height: 50,
        resizeMode: 'contain',        
    },
    icon: {
        alignSelf: 'flex-start',
        color: '#fff',
        height: 50,
        width: 50,
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colorPrimary
    }
})