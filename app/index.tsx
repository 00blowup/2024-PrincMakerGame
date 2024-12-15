import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { router } from "expo-router";

export default function Index() {
  return (
    <View style = {styles.container}>
        <View style = {{ height: 100, width: 200, backgroundColor: 'grey' }}>
            <Text>- logo -</Text>
        </View>
        <View style = {{ height: 200, width: 200, backgroundColor: 'grey', margin: 10 }}>
            <Text>- portrait -</Text>
        </View>
        <TouchableOpacity onPress = { function() { router.navigate('game') } }
         style = {{ height: 100, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'grey' }}>
            <Text style = {{ textAlign: 'center' }}>게임 시작</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = { function() { router.navigate('result') } }
         style = {{ height: 100, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'grey' }}>
            <Text style = {{ textAlign: 'center' }}>임시</Text>
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