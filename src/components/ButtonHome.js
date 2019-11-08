import React, { Component } from 'react'
import Styles from '../styles/components/ButtonHomeStyle'
import {
    Text,
    // Image,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ButtonHome extends Component {
    constructor(props) {
        super(props)
        this._setStyle()
    }

    _setStyle() {
        this.styles = Styles(this.props.primaryColor)
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.box} onPress={this.props.onPress}>
                <Icon name={this.props.iconName} color={this.props.primaryColor} size={60} style={this.styles.iconButton} />
                <Text style={this.styles.textButton}>{this.props.text}</Text>
            </TouchableOpacity >
        )
    }
}

export default ButtonHome
