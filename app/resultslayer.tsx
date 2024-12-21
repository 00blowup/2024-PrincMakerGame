import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/kuM7GrS.png';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 7</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>악마 학살자</Text>
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
                    <Text>활발한 소년이었던 왕자는, 무예에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>당신과 함께 전장을 누빈 최고의 장수들이 기꺼이 왕자의 스승이 되어주었습니다. 왕자는 뛰어난 전사로 성장합니다.</Text>
                    <Text>침략이 잦은 국경으로 직접 나아가 수많은 적군의 목을 벱니다. 그 어떤 인간도 왕자의 칼날에 맞서지 못합니다.</Text>
                    <Text>왕자가 장군으로서 맹위를 떨치던 무렵, 변방에 마물들의 습격이 이어지기 시작합니다. 마물들을 베어나가며, 왕자는 인간과의 싸움에서는 느끼지 못하던 희열을 느낍니다. 검은 갑옷을 입고 눈을 번득이는 왕자의 모습은 어떤 이에게는 동경을, 어떤 이에게는 두려움을 불러일으킵니다.</Text>
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