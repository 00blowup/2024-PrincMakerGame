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
                <View style = {{ height: 500, width: 300, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style = {{ textAlign: 'center' }}>- 결과 일러스트 영역 -</Text>
                </View>
                <View style = {{ height: 300, width: 300, marginTop: 20 }}>
                    <Text>활발한 소년이었던 왕자는, 무예에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>당신과 함께 전장을 누빈 최고의 장수들이 기꺼이 왕자의 스승이 되어주었습니다. 왕자는 뛰어난 전사로 성장합니다.</Text>
                    <Text>왕자는 침략이 잦은 국경으로 직접 나아가 수많은 적군의 목을 벱니다. 그 어떤 인간도 왕자의 칼날에 맞서지 못합니다.</Text>
                    <Text>그러던 어느날, 왕자는 변방의 마을에서 기괴한 형태로 백성들이 죽어나간다는 소식을 듣고 적을 토벌하기 위해 출정합니다. 적의 정체는 지난 100년간 자취를 감추었던 마물들의 무리였습니다. 왕자의 군대와 마물들은 보름 밤낮 동안 이어진 혈투 끝에 전멸합니다. 오직 왕자 혼자만이 힘겹게 살아남습니다. 마물와 인간의 시체로 이루어진 산 위에서, 왕자는 피를 뒤집어쓴 채 희열을 느낍니다.</Text>
                    <Text>이 전투 이후 변방에는 마물들의 습격이 이어집니다. 이제 왕자는 인간과의 싸움에서는 흥미를 느끼지 못합니다. 검은 갑옷을 입고 눈을 번득이며 마물들을 베어나가는 왕자의 모습은 어떤 이에게는 동경을, 어떤 이에게는 두려움을 불러일으킵니다.</Text>
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