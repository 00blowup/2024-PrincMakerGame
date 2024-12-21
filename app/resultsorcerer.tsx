import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/ZJHzNTL.png';

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
                <Image style = {{ height: 500, width: 300 }}
                    src = {imgUrl}
                />
                <View style = {{ width: 300, marginTop: 20, marginBottom: 50 }}>
                    <Text>영리한 소년이었던 왕자는, 마법학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>붉은 보름달이 뜬 어느 밤, 왕자는 금기인 인체연성을 시도합니다. 구름 사이에 숨어있던 달이 드러나 하늘을 눈부시게 비춘 순간, 왕자가 그린 마법진이 불길한 색채로 빛납니다.</Text>
                    <Text>순식간에 왕자의 눈앞이 어두워지더니, 건방진 왕자를 꾸짖는 악마들의 섬뜩한 목소리가 들려옵니다. 그날 이후 왕자의 머릿속에서는 끊임없이 악마들의 저주가 울려퍼집니다.</Text>
                    <Text>고통에 몸부리치며 뛰쳐나간 왕자는 평생 황야를 헤맵니다. 저주를 억제하기 위해 온몸에 마법 주문을 새깁니다. 이따금 그를 목격한 이들의 증언이 들려오지만, 찾아가보면 어느새 홀연히 사라져있습니다.</Text>
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