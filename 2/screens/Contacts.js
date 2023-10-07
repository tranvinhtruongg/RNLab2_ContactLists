import { StyleSheet,Text,View,FlatList,ActivityIndicator } from 'react-native';
import React,{useState,useEffect} from 'react';
import { fetchContacts } from '../../utils/api';
import ContactListItem from '../../components/ContactListItem';
const keyExtractor = ({phone})=> phone;
const Contacts =({navigation})=>
{
    {
        const renderContact = ({item}) =>{
            const{name,avatar,phone} = item;
            return <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={()=> navigation.navigate("Profile",{contact:item})}>
            </ContactListItem>;
        };
    }
    //state
    const [contacts, setContacts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]= useState(false);
    
    //load data
    useEffect(()=>{
        fetchContacts()
        .then(
            contacts=>{
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                console.log(e);
                setLoading(false);
                setError(false);
            }
        )
        },[])
        //sort
        const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
        const renderContact = ({item})=> {
            const {name,avatar,phone}=item;
            return <ContactListItem 
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={()=>{}}
            ></ContactListItem>;
        };
        //render
        return (
            <View style={StyleSheet.container}>
                {loading && <ActivityIndicator color="blue" size="large"></ActivityIndicator>}
                {error && <Text>Error...</Text>}
                {!loading && !error &&(
                    <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}></FlatList>
                )}
            </View>
        );
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        justifyContent:'center',
        flex:1,
    },
});
export default Contacts;