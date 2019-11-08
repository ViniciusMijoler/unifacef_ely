import React from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import Header from '../components/Header';

class AboutUniFacefScreen extends React.Component {
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
                <Header primaryColor={this.primaryColor} backPress={this._backPress} title='O Uni-FACEF'></Header>
                <View style={{flex: 1, padding: 30}}>
                    <ScrollView>
                        <Text style={{fontSize: 16, textAlign: 'justify'}}>
                            O Uni-FACEF – Centro Universitário Municipal de Franca – é uma Instituição de Ensino Superior que atua há mais sessenta anos no ensino superior na cidade de Franca, situada a 400 km de distância, a nordeste da capital São Paulo.
                        </Text>
                        <Text style={{fontSize: 16, textAlign: 'justify'}}>
                            A Missão do Uni-FACEF é “construir e difundir o conhecimento, contribuindo para a formação do ser humano, a fim de que ele exerça o seu papel na sociedade com ética e cidadania”.
                        </Text>
                        <Text style={{fontSize: 16, textAlign: 'justify'}}>
                            Em termos quantitativos, atualmente, o Uni-FACEF Centro Universitário Municipal de Franca é um Centro Universitário Municipal, com cerca de 2.000 estudantes. Instalado, atualmente, em dois amplos terrenos, com mais de 12.000 m² de área e, aproximadamente, 10.000 m² edificados, o Centro Universitário Uni-FACEF Centro Universitário de Franca dispõe de modernas instalações para desenvolver um ensino de padrão de alta qualidade.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default AboutUniFacefScreen
