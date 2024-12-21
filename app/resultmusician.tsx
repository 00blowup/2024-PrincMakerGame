import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/cMrUZg2.png';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 6</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>최고의 음악가</Text>
                </View>
                <View style = {styles.horizontal}>
                    <TouchableOpacity onPress = { function() { router.navigate('baby') } }
                     style = {{width: 150, height: 50, backgroundColor: 'black', borderRadius: 100, margin: 10, justifyContent: 'center' }}>
                        <Text style = {{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>다시 시작</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { function() { router.navigate('') } }
                     style = {{width: 150, height: 50, backgroundColor: 'black', borderRadius: 100, margin: 10, justifyContent: 'center' }}>
                        <Text style = {{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>타이틀로</Text>
                    </TouchableOpacity>
                </View>
                <Image style = {{ height: 500, width: 300 }}
                    src = {imgUrl}
                />
                <View style = {{ width: 300, marginTop: 20, marginBottom: 50 }}>
                    <Text>활발한 소년이었던 왕자는, 음악에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>당신은 최고의 음악가들을 초청하여 왕자의 견문을 넓혀주었습니다. 왕자는 다양한 악기에 재능을 보이고 작곡에도 흥미를 갖습니다.</Text>
                    <Text>왕자가 작곡한 음악을 들으며 당신이 처음으로 눈물을 흘린 날, 당신은 왕실 오케스트라의 책임자 자리를 왕자에게 권유합니다. 왕자는 진심으로 기뻐하며 받아들입니다.</Text>
                    <Text>아직 전쟁의 상처가 남은 왕국을 치유하듯, 왕자의 아름다운 음악이 온누리에 흐릅니다.</Text>
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