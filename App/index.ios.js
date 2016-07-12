/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Router from 'react-native-simple-router';
//import TwitterApp from './node_modules/react-native-simple-router/twitter-example';
var App = require('./service/core.app');
var SignIn = require('./pages/sign-in.js');
var Home = require('./pages/home.ios.js');

var firstRoute = {
  name: 'Home',
  component: Home,
  hideNavigationBar: true,
  statusBarProps:{statusBarHidden: true}
};


class VanthinkApp extends Component {
    
    constructor(props) {
        super(props);
        var self = this;
        //var isLogin = App.checkLogin(function(value) {
          //  self.setState({isLogin: value, loading: false}); 
        //});
        this.state = {
            isLogin:  true,
            loading: false,                      
        };
    }
    
    
    renderLogo() {
        return (
          <View style={styles.container}>
             <Image style={styles.image} source={require('./images/vanthink-ios-app.jpg')} />
          </View>
        );        
    }
    
    
    render() {
        var self = this;
                                  
        
        
                                    
                                                         
        if (this.state.loading) {
          return this.renderLogo();
        }                            
        
        if(this.state.isLogin === false && this.state.loading === false) {
            firstRoute = {
                name: '登录',
                component: SignIn,
                headerStyle: {
                    backgroundColor: '#f1e7ce',
                }
            };
        }
        
        return (
            <Router firstRoute={firstRoute} />
        )
    }
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'relative',
    },
    
    image: {
        flex:1,
        resizeMode: 'contain',
    }
  
});

AppRegistry.registerComponent('vanthink_ios_app', () => VanthinkApp);
