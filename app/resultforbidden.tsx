import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/pHoXvnV.png';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 3</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>금지된 학문의 추종자</Text>
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
                    <Text>조용한 소년이었던 왕자는, 문학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>책을 읽다 보면 시간이 가는 줄도 모릅니다. 해가 지면 그날 읽은 책에 대해 사유하며, 그 내용을 글로 남깁니다.</Text>
                    <Text>스무 번째 생일에는 금서로 지정된 책을 선물로 요청합니다. 정말 못말리는 책벌레입니다.</Text>
                    <Text>왕자가 외출한 사이 그의 방에 들어가본 당신은, 책장 뒤에 숨겨진 비밀의 서재를 발견합니다. 그곳에는 위험하고 불경한 지식을 다루는 온갖 고서적들이 즐비합니다. 이곳을 다른 누군가가 발견한다면 즉시 추방당할 것입니다. 당신은 그곳의 모든 책을 태워버리고 왕자를 꾸짖습니다.</Text>
                    <Text>그러자 왕자는 처음 보는 분개한 표정으로 당신에게 소리를 치더니, 호위 몇을 데리고 궁을 떠납니다. 누구의 방해도 없이 지식을 탐구할 곳으로 가겠다면서...</Text>
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