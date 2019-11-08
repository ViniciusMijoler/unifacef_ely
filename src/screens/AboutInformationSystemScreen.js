import React from 'react';
import {
    Text,
    View,
    ScrollView
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
                <View style={{flex: 1, padding: 30}}>
                    <ScrollView>
                        <Text style={{textAlign: 'justify'}}>
                            O Curso de Bacharelado em Sistemas de Informação (Computação) do Uni-FACEF possui como instrumentos no processo ensino-aprendizagem:

                            Bolsas de iniciação científica do CNPq, que são o PIBIC (Programa Institucional de Bolsas de Iniciação Científica) e o PIBITI (Programa Institucional de Bolsas de Iniciação Tecnológica e Inovação). De forma particular ao PIBITI, os alunos do curso de Sistemas de Informação vêm participando, de forma significativa, no desenvolvimento de projetos de tecnologia e inovação tecnológica A presença de bolsistas do CNPq em sala de aula contribui para que os colegas de sala percebam o amadurecimento do aluno para com a área acadêmica e os estudos de investigação científica de modo geral.
                            Grupo de Pesquisa em Sistemas de Informação e Gestão Tecnológica (GESIGet) certificado pelo CNPQ e disponível em http://dgp.cnpq.br/dgp/espelhogrupo/9568611569444581. O grupo é composto por alunos e professores, que discutem ideias e constroem conhecimento nas áreas de atuação do curso.
                            TISIs (Trabalho Interdisciplinar em Sistemas de Informação). Estes trabalhos interdisciplinares são realizados no segundo e quarto semestres de curso. No segundo semestre, os alunos realizam a escrita de um artigo científico, apoiados nas disciplinas de Comunicação e Expressão e Inglês Instrumental, e utilizando áreas de conhecimento das disciplinas de Sistemas de Informação Integrados e Gestão Empresarial. Basicamente o método de pesquisa utilizado aqui é o de revisão bibliográfica. No quarto semestre, os alunos desenvolvem um software e um artigo científico. Para o  dsenvolvimento do software, exploram-se as disciplinas de Técnicas de Programação, Padrões de Projeto, e Banco de Dados I e II. Para a escrita do artigo, apoia-se nas disciplinas de Metodologia de Pesquisa Científica I e II.
                            Revista eletrônica de Sistemas de Informação e Gestão Tecnológica – RESIGet – disponível em http://periodicos.unifacef.com.br/index.php/resiget. A revista promove e publica os resultados dos trabalhos dos alunos por ocasião dos Trabalhos de Conclusão do Curso realizados no quarto ano do curso, e dos TISIs (Trabalho Interdisciplinar de Sistemas de Informação) realizados no primeiro e segundo anos do curso.
                            Convênio com o Imagine da Microsoft, que permite que alunos e professores possam fazer download gratuitamente dos softwares de desenvolvimento da Microsoft, como Visual Studio, SQL Server, Windows 8, XNA, Kinect, e outros como (https://imagine.microsoft.com/pt-br/catalog).
                            Convênio com a EMC Academic Alliance (https://education.emc.com/academicalliance/default.aspx), uma empresa na área de educação em Infraestrutura e Computação em Nuvem. O convênio permite que professores possam fazer cursos e disseminar para seus alunos, compartilhando material didático na área.
                            Parceria com a iTerior para realização de palestras anuais no Uni-FACEF sobre tecnologias emergentes de gestão e desenvolvimento de software (http://www.iterior.com.br/).  As palestras são realizadas por profissionais da área e que atuam no mercado de trabalho local e regional de Franca.
                            Realização de uma visita técnica por ano com os alunos para conhecerem as grande empresas na área de TI. Até o presente momento, foram realizadas visitas técnicas para a empresa ToTVS em São Paulo (2016), a empresa CI&T em Campinas (2015), a Microsoft Technology Center (MTC) em São Paulo (2014), o E-Commerce do Magazine Luiza em São Paulo (2013), o SERPRO, serviço de TI para o governo federal em São Paulo (2012), o Data Center Ativas e a CEMIG em Belo Horizonte (2011) e o departamento de TI da Unesp Franca (2010) .
                            Parceria e convênios com empresas de TI que atuam na cidade de Franca – SMN Informática, Luiza Labs, CHB Sistemas, Betta Tecnologia, Cloud Walk, Cloud Med, AudTax, FCAMARA, Andes, EddyData, Com4, Irroba, Unesp Franca, ERNetwork, Polo Francano de TI, SoftUp, ProSoft, JRTI, Incca, Prefeitura Municipal de Franca, e outras mais.
                            Para completar a formação integral dos estudantes, além das competências técnicas, são motivadas participações em atividades de voluntariado social, em trotes solidários e gincanas de acolhimento (https://www.unifacef.com.br/extensao/trote-solidario/). A IES organiza seu currículo, de forma a garantir a excelência técnica e o olhar atento aos aspectos humanos e sociais.

                            A empregabilidade dos egressos do curso é, praticamente, 100%, na área, mesmo antes do encerramento do curso. A competência profissional e a formação ética permeiam o cotidiano dos universitários.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default AboutInformationSystemScreen
