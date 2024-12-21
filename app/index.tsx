import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { router } from "expo-router";

const logoUrl = 'https://i.imgur.com/q7R4dsf.png';
const portraitUrl = 'https://i.imgur.com/aKUgTu7.png';

export default function Index() {
  return (
    <View style = {styles.container}>
        <Image style = {{ height: 150, width: 300 }}
            src = {logoUrl}
        />
        <Image style = {{ height: 300, width: 300 }}
            src = {portraitUrl}
        />
        <TouchableOpacity onPress = { function() { router.navigate('baby') } }
         style = {{ height: 100, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'black', margin: 10, borderRadius: 100 }}>
            <Text style = {{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold' }}>게임 시작</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = { function() { router.navigate('credit') } }
         style = {{ height: 50, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'black', margin: 10, borderRadius: 100 }}>
            <Text style = {{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>CREDIT</Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        }
    });