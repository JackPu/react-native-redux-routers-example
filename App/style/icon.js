import React, { TouchableHighlight, Image, StyleSheet, PropTypes } from 'react-native';



let styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15,
  },
  blueIcon:{
    backgroundColor: '#3498db',
    borderRadius: 10.5,  
  }    
});

class Icons extends React.Component { 
    constructor(props) {
        super(props);

        console.log(this.props);

        this.press = this.press.bind(this);
      }

      press() {
        this.props.press();
      }
    
      _renderIcon() {
        return (
            <Image source={require('../images/Delete-48.png')} style={styles.icon} />
        );  
      }

      render() {
        return (
          <TouchableHighlight underlayColor="transparent" onPress={this.press}>
            {this._renderIcon()}
          </TouchableHighlight>
        );
      }
    
}

class CloseIcon extends Icons {
    _renderIcon() {
        return (
            <Image source={require('../images/Delete-48.png')} style={styles.icon} />
        );  
      }
}

class SearchIcon extends Icons {
    _renderIcon() {
        return (
            <Image source={require('../images/Search-50.png')} style={styles.icon} />
        );  
      }
}
class FilterIcon extends Icons {
    _renderIcon() {
        return (
            <Image source={require('../images/filter.png')} style={styles.icon} />
        );  
      }
}

class CheckmarkIcon extends Icons {
    _renderIcon() {
        return (
            <Image source={require('../images/checkmark.png')} style={[styles.icon,styles.blueIcon]} />
        );  
      }
}

class CheckmarkIcon2 extends Icons {
    _renderIcon() {
        return (
            <Image source={require('../images/checkmark.png')} style={[styles.icon]} />
        );  
      }
}


module.exports = {
    CloseIcon,
    SearchIcon,
    FilterIcon,
    CheckmarkIcon,
    CheckmarkIcon2
    
};
