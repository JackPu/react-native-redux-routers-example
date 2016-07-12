'use strict';

var React = require('react-native');
var Button = require('react-native-button');
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import TabBar from '../components/tab-bar';
var Css = require('../style/css');
var Profile = require('./profile'); 
var Homework = require('./homework'); 
var Group = require('./group');
var Teacher = require('./teacher');
var Game = require('./res/game');   
                           
var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Component
} = React;

// need tabs view github https://github.com/aksonov/react-native-tabs


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
 
});

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        
        this.nextPage = this.nextPage.bind(this);
        this.routeMap = {
            profile: {
                name: "个人资料",
                component: Profile
            },
            
            homework: {
                name: '作业',
                component: Homework
            },
        };
    }
    
    nextPage() {
        this.props.toRoute({
          name: "个人资料",
          component: Profile
        });
    }
    
    setState(name) {
        this.props.toRoute(this.routeMap[name]);
    }
    
    render() {
        var self = this;
        return (
            <ScrollableTabView style={styles.container} initialPage={0} renderTabBar={()=><TabBar />}
                tabBarPosition='overlayBottom'>
                <Homework tabLabel='homework' navChange={this.props.toRoute}/>
                <Game tabLabel='game' navChange={this.props.toRoute}/>
                <Teacher tabLabel='student' navChange={this.props.toRoute}/>
                <Group tabLabel='group' />
                <Profile tabLabel='profile' navChange={this.props.toRoute} />
            </ScrollableTabView>
        );
  }
}


module.exports = Home;