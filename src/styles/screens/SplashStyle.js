import { StyleSheet } from 'react-native';

export default (color) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
})