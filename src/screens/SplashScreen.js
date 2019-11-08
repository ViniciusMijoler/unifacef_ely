import React from 'react';
import {
    View,
    Image
} from 'react-native'
import Styles from '../styles/screens/SplashStyle'

class SplashScreen extends React.Component {
    static navigationOptions = { header: null }

    componentDidMount() {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/imgs/unifacef.png')} style={styles.image} />
            </View>
        )
    }
}

const styles = Styles('#344f8a')

export default SplashScreen