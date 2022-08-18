import React,{useState} from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';
import Input from '../components/input/Input';
import  Button  from '../components/Button/Button';

function MemberSign({navigation}) {

const [name,SetName] = useState("");
const [surname, SetSurname] = useState("");
const [age,SetAge] = useState("");
const [eposta,SetEposta] = useState("");
const [homeTown,SetHomeTown] = useState("");

function handleSubmit(){
  if(!name || !surname || !age || !eposta || !homeTown ){
    Alert.alert("Vedat Acar uyarıyor..", "Tüm alanları eksiksiz doldurunuz");
    return;
  }
  const user={
    name,
    surname,
    age,
    eposta,
    homeTown,
  };

   navigation.navigate("MemberResultScreen", {user});
}

  return (
    <SafeAreaView>
        <Input label="Üye Adı" placeholder="Üye ismini giriniz..." onChangeText={SetName} />
        <Input label="Üye Soyadı" placeholder="Üye soyadını giriniz..." onChangeText={SetSurname} />
        <Input label="Üye Yaşı" placeholder="Üye yaşını giriniz..." onChangeText={SetAge} />
        <Input label="Üye Epostası" placeholder="Üyenin Epostasını giriniz..." onChangeText={SetEposta} />
        <Input label="Üye Memleket" placeholder="Üyenin memleketini giriniz..." onChangeText={SetHomeTown} />
       
        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default MemberSign;