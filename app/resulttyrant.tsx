import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/scgOyje.png';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 9</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>폭군</Text>
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
                    <Text>영리한 소년이었던 왕자는, 제왕학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>왕자의 총명함은 틀림없이 빛을 발하였지만, 고통받는 백성들의 삶에는 좀처럼 관심을 갖지 않습니다.</Text>
                    <Text>충분한 나이가 되자 왕자는 왕위에 오릅니다. 축복 속에 즉위하였으나, 머지않아 폭정이 시작됩니다.</Text>
                    <Text>매일 술에 취해 검투사들의 경기를 구경합니다. 마지막까지 충언을 하던 당신은 먼 도시로 좌천되고 맙니다. 왕국은 돌이킬 수 없는 혼란 속으로 가라앉습니다.</Text>
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