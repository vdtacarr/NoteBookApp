import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function MemberResult({route}) {
   
    const {user} = route.params;
    return (
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text>---------------------------------------------------------------------------------------------</Text>
            <Text style={styles.label} >Üye Adı:{user.name}  </Text>
            <Text style={styles.label}>Üye SoyAdı: {user.surname} </Text>
            <Text style={styles.label}>Üye Yaşı: {user.age} </Text>
            <Text style={styles.label}>Üye Epostası: {user.eposta} </Text>
            <Text style={styles.label}>Üye Memleketi: {user.homeTown} </Text>
            
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    label:{
         fontWeight:'bold',
         fontSize:30,
         margin:5,
    },
    message:{
        color:'red',
        marginBottom:30,
          fontWeight:'bold',
          fontSize:50,
          textAlign:'center',  
    }
})
export default MemberResult