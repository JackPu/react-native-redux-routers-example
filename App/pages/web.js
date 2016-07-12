'use strict';

var React = require('react-native');
var Css = require('../style/css');

var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    PropTypes,
    WebView,
    Component
} = React;


var api = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
class Web extends Component {
    constructor(props) {
        super(props);
        let url = '';
        if(props.data.url) {
            url = props.data.url;
        }
        this.state = {
          url: url + '?HIDE_HEADER=1&ios_ref=1',
        };
    }
        
    render() {

        return ( 
            <View style ={Css.container}>
                <WebView
                  ref={'webview'}
                  automaticallyAdjustContentInsets={false}
                  style={{flex:1}}
                  source={{uri:this.state.url}}
                  startInLoadingState={true}
                />
                
              
            </View>
        );
    }
}

module.exports = Web;