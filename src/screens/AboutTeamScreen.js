import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import Header from '../components/Header';
import Styles from '../styles/screens/AboutTeamScreen';

class AboutTeamScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.primaryColor = '#344f8a';
        this.styles = Styles();
    }

    _backPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header primaryColor={this.primaryColor} backPress={this._backPress} title='Desenvolvedores'></Header>
                <View style={{flex: 1 }}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20}}>
                        <View style={this.styles.containerImageUser}>
                            <Image source={require('../assets/imgs/vinicius.png')} style={this.styles.imageUser} />
                        </View>
                        <Text style={{textAlign: 'center'}}>Vinicius Mijoler Vilela de Andrade</Text>
                        <Text style={{textAlign: 'center'}}>19628</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 20}}>
                        <View style={this.styles.containerImageUser}>
                            <Image source={require('../assets/imgs/gabriel.png')} style={this.styles.imageUser} />
                        </View>
                        <Text style={{textAlign: 'center'}}>Gabriel de Freitas Pinheiro</Text>
                        <Text style={{textAlign: 'center'}}>19231</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default AboutTeamScreen
