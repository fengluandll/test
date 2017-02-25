import React, {PropTypes, Component} from 'react';

import {
    ListView,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';

import * as gloablStyles from '../styles/global';

export default class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title != row2.title
        });
        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            modalVisible: false
        };
        this.renderRow = this.renderRow.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
    }

    onModalOpen(){
        this.setState({
            modalVisible:true,
            modalUrl: url
        });
    }

    onModalClose(){
        this.setState({
            modalVisible: false
        });
    }

    renderModal(){
        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
            onRequestClose={this.onModalClose}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={this.onModalClose} style={styles.closeButton}>
                        <SmallText>Close</SmallText>
                    </TouchableOpacity>
                    <WebView
                        scalesPageToFit
                        source={{uri:this.state.modalUrl}}/>
                </View>
            </Modal>
        );
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={()=>this.onModalOpen(rowData.url)}
                style={styles.newItem}
                      index={index}
                {...rowData}/>
        );
    }

    render() {
        return (
            <View style={gloablStyles.COMMON_STYLES.pageContainer}>
                <ListView
                    enableEmptySections
                    dataSource={this.state.datasource}
                    renderRow={this.renderRow}
                    style={this.props.listStyles}
                />
                {this.renderModal()}
            </View>);
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: view.prototype.style
};

NewsFeed.defaultProps = {
    news: [{
        title: 'React Native',
        imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
        description: 'Build Native Mobile Apps using JavaScript and React',
        date: new Date(),
        author: 'Facebook',
        location: 'Menlo Park, California',
    }, {
        title: 'Packt Publishing',
        imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png',
        description: 'Stay Relevant',
        date: new Date(),
        author: 'Packt Publishing',
        location: 'Birmingham, UK',
        url: 'https://www.packtpub.com/'
    }]
};

const styles = StyleSheet.create({
    newsItem:{
        marginBottom: 20
    },
    modelContent:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: gloablStyles.BG_COLOR
    },
    closeButton:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
});