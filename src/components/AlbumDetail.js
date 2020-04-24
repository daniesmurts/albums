import React from 'react';
import {View, StyleSheet, ActivityIndicator, Image, Linking} from 'react-native';
import {Text} from 'react-native-elements';
import Card from './Card';
import CardItem from './CardItem';
import Btn from './Btn';


const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    return(
        <Card>
            <CardItem>
                <View style={styles.imgContainerStyle} >
                    <Image source={{uri:thumbnail_image}} style={styles.imageStyle} />
                </View>
                <View style={styles.headerContainerStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardItem>
            <CardItem>
                <Image 
                style={styles.mainImgStyle}
                source={{uri:image}} />
            </CardItem>
            <CardItem>
                <Btn  onPress={()=> Linking.openURL(url)}>
                    Buy Now!
                </Btn>
            </CardItem>
            
        </Card>
    )

};

const styles=StyleSheet.create({
    headerContainerStyle:{
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    titleStyle:{
        fontSize: 20 
    },
    imageStyle:{
        width: 50,
        height:50,
        borderRadius:50  
    },
    imgContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    mainImgStyle:{
        height:350,
        flex: 1,
        width: null
    },
    btnStyle:{
    
    }

})


export default AlbumDetail;