import React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text } from 'react-native'; 
import { fetchRandomContact } from '../../utils/api';
import ContactThumbnail from '../../components/ContactThumbnail';
import DetailListItem from '../../components/DetailListItem';
import colors from '../../utils/colors';

const Profile =({route})=>
{
    const {contact}=route.params;
    // const[contact,setContact] = useState({});
    // useEffect(()=>
    // {
    //     fetchRandomContact().then(
    //         contact=>setContact(contact)
    //     )
    // }
    // ,[]);
    const {avatar,name ,email,phone,cell}= contact;
    return(
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}></ContactThumbnail>
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email}></DetailListItem>
                <DetailListItem icon="phone" title="work" subtitle={phone}></DetailListItem>
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell}></DetailListItem>
            </View>
        </View>
    );
}

export default Profile;
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.blue, 
    },
    detailSection:{
        flex:1,
        backgroundColor:'white',
    },
});