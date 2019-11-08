import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width

export default (colorPrimary)  => StyleSheet.create({
    // Header
    containerHeader: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPrimary
    },
    imageCenter: {
        width: 200,
        height: 50,
        resizeMode: 'contain',        
    },

    // Body
    containerBody: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    containerInfos: {
        width: '100%',
        backgroundColor: colorPrimary,
        paddingTop: 25,
        paddingBottom: 25,
        paddingStart: 30,
        paddingEnd: 30,
        borderRadius: 15,
    },
    textHello: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textWelcome: {
        color: '#fff',
        fontSize: 17,
    },
    
    containerBox: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})