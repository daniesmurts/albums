import React from 'react';
import {Text} from 'react-native-elements';
import { View, StyleSheet } from 'react-native';




const Header = (props) => {
    const { textStyle, viewStyle} = styles;
    
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};



const styles= StyleSheet.create({
    textStyle: {
                fontSize: 20
            },
            viewStyle:{
                backgroundColor: '#f8f8f8',
                alignItems:"center",
                justifyContent:"center",
                height: 70,
                paddingTop: 25,
                shadowColor: 'black',
                textShadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                elevation: 2,
                position: "relative"
            }
});

export default Header;