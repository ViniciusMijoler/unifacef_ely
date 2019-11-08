import { StyleSheet } from 'react-native';

export default () => StyleSheet.create({
    box: {
        margin: 10,
        backgroundColor: '#fff',
        height: 120,
        width: 120,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        marginBottom: 10,
    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})