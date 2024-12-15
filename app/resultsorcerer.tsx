import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 11</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>저주받은 연금술사</Text>
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
                <View style = {{ height: 500, width: 300, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style = {{ textAlign: 'center' }}>- 결과 일러스트 영역 -</Text>
                </View>
                <View style = {{ height: 300, width: 300, marginTop: 20 }}>
                    <Text>영리한 소년이었던 왕자는, 마법학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>타고난 강한 마력과 총명함으로 왕자의 마법 실력은 빠르게 성장합니다. 호기심이 많은 왕자는 대마법사들이 알려준 내용 이외에도 다양한 실험을 해봅니다.</Text>
                    <Text>붉은 보름달이 뜬 어느 밤, 왕자는 여느 때처럼 실험적인 마법진을 그려보던 중이었습니다. 구름 사이에 숨어있던 달이 드러나 하늘을 눈부시게 비춘 순간, 왕자가 그린 마법진이 불길한 색채로 빛납니다.</Text>
                    <Text>순식간에 왕자의 눈앞이 어두워지고, 타들어가는 고통이 느껴지더니, 건방진 왕자를 꾸짖는 악마들의 섬뜩한 웃음소리가 들려옵니다. 환각과 고통에 한참을 몸부림치다 정신을 차렸을 때, 왕자는 목덜미에 저주의 낙인이 찍혔음을 알아챕니다.</Text>
                    <Text>그날 이후 왕자는 완전히 다른 사람이 되었습니다. 마탑의 꼭대기에 기괴한 실험실을 꾸려, 어둠의 마법에 탐닉합니다. 저주의 낙인이 선물한 넘쳐나는 힘에 심취한 채, 서서히 자신의 생명을 갉아먹습니다.</Text>
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