import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ height: 100, width: 300, backgroundColor: 'grey' }}>
                    <Text>- result title -</Text>
                </View>
                <View style = {styles.horizontal}>
                    <TouchableOpacity onPress = { function() { router.navigate('game') } }
                     style = {{ height: 100, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'grey' }}>
                        <Text style = {{ textAlign: 'center' }}>다시 시작</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { function() { router.navigate('') } }
                     style = {{ height: 100, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'grey' }}>
                        <Text style = {{ textAlign: 'center' }}>타이틀로</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: 500, width: 300, backgroundColor: 'grey' }}>
                    <Text>- result illustration -</Text>
                </View>
                <View style = {{ height: 300, width: 300, backgroundColor: 'grey' }}>
                    <Text>- result description -</Text>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        },
    horizontal: {
        flexDirection: 'row'
        }
    });