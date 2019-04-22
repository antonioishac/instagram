import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Image } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: 1,
            nickname: 'Rafael Pereira Filho',
            email: 'rafael@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Stunning!'
                }, {
                    nickname: 'Ana Júlia Arruda',
                    comment: 'Foto Linda, onde foi tirada?'
                }]
        }, {
            id: 2,
            nickname: 'Francisco Leandro Lima',
            email: 'francisco@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    };

    render() {
        return (
            <View style={styles.container}>
                <Header />

                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed
