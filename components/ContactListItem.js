import { StyleSheet,Text,Image} from 'react-native';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
const ContactListItem=({
    name,avatar,phone,onPress,
})=>
{
    return(
        <TouchableHighlight 
        underlayColor={Colors.grey}
        style={StyleSheet.container}
        onPress={onPress}
        >
        <View style={StyleSheet.contactInfo}>
        <Image style={StyleSheet.avatar}
        source={{
            uri:avatar,
        }}>
        </Image>
        <View style={Styles.details}>
        <Text style={[styles.title]}>{name}</Text>
        <Text style={[styles.subtitle]}>{phone}</Text>
        </View>
        </View>
        </TouchableHighlight>
    );
}
export default ContactListItem;

ContactListItem.prototypes ={
    name: PropTypes.string,
    avatar:PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

const styles =StyleSheet.create({
    container:{
        paddingLeft:24,
    },
    contactInfo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    details:{
        justifyContent:'center',
        flex:1,
        marginLeft:20,
    },
    avatar:{
        borderRadius:22,
        width:44,
        height:44,
    },
    title:{
        color:colors.black,
        fontWeight:'bold',
        fontSize:16,
    },
    subtitle:{
        color:colors.blue,
        fontSize:15,
        marginTop:4,
    },
});