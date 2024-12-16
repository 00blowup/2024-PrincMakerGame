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
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 8</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>왕실 기사단장</Text>
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
                    <Text>활발한 소년이었던 왕자는, 무예에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>당신과 함께 전장을 누빈 최고의 장수들이 기꺼이 왕자의 스승이 되어주었습니다. 왕자는 무술 뿐만 아니라 리더십까지 갖춘 인재로 평가받습니다.</Text>
                    <Text>당신은 왕자의 리더십을 알아보고, 그리 크지 않은 부대 하나를 이끄는 지휘관으로 왕자를 임명합니다. 경험을 위해 가볍게 맡겨본 직책이었으나, 왕자는 짧은 시간 안에 그들을 굉장한 정예병으로 탈바꿈시킵니다.</Text>
                    <Text>그 후로도 계속해서 무예를 갈고닦고 신임을 쌓은 왕자는, 수도와 왕궁의 방위를 책임지는 왕실 기사단의 단장을 맡게 됩니다. 왕실 기사단은 명실상부 모든 이가 인정하는 가장 강하고 고귀한 기사단으로 자리매김합니다.</Text>
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