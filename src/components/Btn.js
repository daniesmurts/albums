import React from 'react';
import {Text, Button} from 'react-native-elements';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Btn = ({onPress, children}) => {
    return(
        <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        >
            <Text style={styles.btnTxt}> {children}</Text>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    button: {
        flex: 1,
        alignSelf:'stretch',
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#007aff",
        padding: 10,
        
    },
    btnTxt:{
        color:'#fff',
        fontSize: 18,
        fontWeight: "600"
    }

});

export default Btn;
