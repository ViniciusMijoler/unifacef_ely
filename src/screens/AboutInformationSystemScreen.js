import React from 'react';
import {
    View
} from 'react-native';
import Header from '../components/Header';

class AboutInformationSystemScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.primaryColor = '#344f8a';
    }

    _backPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header primaryColor={this.primaryColor} backPress={this._backPress} title='Sistemas de Informação'></Header>
                <View style={{flex: 1}}>
                    
                </View>
            </View>
        )
    }
}
export default AboutInformationSystemScreen
