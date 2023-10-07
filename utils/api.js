import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
uuidv4();
const mapContact = contact =>{
    const{
        name,picture,phone,cell,email,
    }=contact
    return {
        id:v4(),
        name: name.first+" "+name.last,
        avatar:picture.large,
        phone,
        cell,
        email,
        favorite: Math.random()>=0.5,
    };
}
const fetchContacts= async ()=>{
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const contact =await response.json();
    return contactData.result.map(mapContact);
};
const fetchUserContact= async ()=>{
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const userData =await response.json();
    return mapContact(userData.result[0]);
};
const fetchRandomContact= async ()=>{
    const response = await fetch('https://randomuser.me/api/');
    const userData =await response.json();
    return mapContact(userData.result[0]);
};
export {fetchContacts,fetchRandomContact,fetchUserContact};

