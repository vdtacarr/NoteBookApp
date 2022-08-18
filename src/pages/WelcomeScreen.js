import React from 'react';
import { SafeAreaView, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Button from '../components/Button/Button';

function WelcomeScreen({ navigation }) {

    function goToMemberSign() {
        navigation.navigate("MemberSignScreen");
    }
    const handleTodoApp = () =>{
        navigation.navigate("TodoApp");
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
            <Button text="Todo uygulamasına git" onPress={handleTodoApp}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerButton:{
        backgroundColor:'1976d2',
        borderRadius:5,
        padding:10,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:'blue',
        fontWeight:"bold",
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    },

})
export default WelcomeScreen;