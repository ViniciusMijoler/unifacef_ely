import { StyleSheet } from 'react-native'

export default (color) => StyleSheet.create({
    containerImageUser: {
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageUser: {
        width: 125,
        height: 125,
        borderRadius: 100,
    }
})