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
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 5</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>떠돌이 음유시인</Text>
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
                <View style = {{ width: 300, marginTop: 20, marginBottom: 50 }}>
                    <Text>활발한 소년이었던 왕자는, 음악에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>최고의 음악가들을 초청하여 왕자의 견문을 넓혀주었습니다. 왕자는 아름다운 노래를 만들어 부르며, 당신을 웃게 해줍니다.</Text>
                    <Text>그러던 어느날, 정원을 거닐던 당신은 왜인지 쓸쓸한 표정을 짓는 왕자와 마주칩니다. 고민을 털어놓으라 말하자, 왕자는 좁은 궁 안에만 지내니 창작에 한계를 느낀다고 고백합니다.</Text>
                    <Text>그 대화를 나눈 지 일주일 정도 되었을 때, 왕자는 운율에 맞추어 쓴 애정 어린 작별편지를 남기고 홀연히 넓은 세상으로 떠납니다. 어릴 적부터 연주해온 작은 류트 하나만을 든 채로...</Text>
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