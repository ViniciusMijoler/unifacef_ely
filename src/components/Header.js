import React, { Component } from 'react'
import Styles from '../styles/components/HeaderStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    Text,
    View,
    Image
} from 'react-native'

class Header extends Component {
    constructor(props) {
        super(props)
        this._setStyle()
    }

    _setStyle() {
        this.styles = Styles(this.props.primaryColor)
    }

    render() {
        const title = this.props.title;
        const logo = require('../assets/imgs/unifacef.png');
        return (
            <>
                <View style={this.styles.container}>
                    <Icon name='chevron-left' size={20} style={this.styles.icon} onPress={this.props.backPress} />
                    <View style={{flex: 1, marginRight: 50, alignItems: 'center'}}>
                        <Image source={logo} style={this.styles.imageCenter} />
                    </View>
                </View>
                <View style={this.styles.containerTitle}>
                    <Text style={this.styles.title}>{title}</Text>
                </View>
            </>
        )
    }
}

export default Header
