import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import Styles from '../styles/screens/HomeStyle';
import ButtonHome from '../components/ButtonHome';

class HomeScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this._setStyle();
    }

    _setStyle() {
        this.primaryColor = '#344f8a';
        this.styles = Styles(this.primaryColor);
    }

    _goToAboutUniFacef = () => {
        this.props.navigation.navigate('AboutUniFacef');
    }

    _goToAboutIS = () => {
        this.props.navigation.navigate('AboutIS');
    }

    _goToAboutTeam = () => {
        this.props.navigation.navigate('AboutTeam');
    }

    render() {
        const logo = require('../assets/imgs/unifacef.png');

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={this.styles.containerHeader}>
                    <Image source={logo} style={this.styles.imageCenter} />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={this.styles.containerBody}>
                        <View style={this.styles.containerInfos}>
                            <Text style={this.styles.textHello}>Olá, usuário, tudo bem?</Text>
                            <Text style={this.styles.textWelcome}>Bem-vindo ao app Unifacef.</Text>
                        </View >
                    </View>
                    <View style={this.styles.containerBox}>
                        <ButtonHome text={'O Uni-FACEF'} primaryColor={this.primaryColor} onPress={this._goToAboutUniFacef} iconName='navicon' />
                        <ButtonHome text={'Sistemas de Informação'} primaryColor={this.primaryColor} onPress={this._goToAboutIS} iconName='clock-o' />
                        <ButtonHome text={'Desenvolvedores'} primaryColor={this.primaryColor} onPress={this._goToAboutTeam} iconName='group' /> 
                    </View>
                </View>
            </View>
        )
    }
}

export default HomeScreen