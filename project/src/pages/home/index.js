import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.banner}>

          <Text style={styles.bannerText}>
            {'Words with Friends Cheater'}
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.bestWords}>
            <Text style={styles.myText}>
              {'Best Words Stuff'}
            </Text>
          </View>
          <Image source={require('../../images/IMG_2655.png')} style={styles.board}/>
          <View style={styles.myLetters}>
            <Text style={styles.myText}>
              {'My Words Stuff'}
            </Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  banner: {
    height: 50,
    backgroundColor: '#0B0C10',
    justifyContent: 'space-around',
    elevation: 5,
    backgroundColor: '#1F2833'
  },
  bannerText: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'sans-serif-thick',
    color: "#66FCF1",
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1F2833'

  },
  bestWords: {
    height:70,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 10,
    backgroundColor : '#EEE'

  },

  board: {
    flex:1,
    borderColor: 'white',
    width: '100%',
    resizeMode: 'stretch',
    // resizeMode: 'contain',
    
  },
  myLetters: {
    height: 75,
    justifyContent: 'center'
  },
  navBar: {
    height: 60,
    width: '100%',
    backgroundColor: '#45A29E',
    justifyContent: 'center',
  },
  myText: {
    alignSelf: 'center',
    fontSize: 15,
    color: "#66FCF1"
  },

});

