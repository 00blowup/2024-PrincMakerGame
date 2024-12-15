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
                <View style = {{ height: 500, width: 300, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style = {{ textAlign: 'center' }}>- 결과 일러스트 영역 -</Text>
                </View>
                <View style = {{ height: 300, width: 300, marginTop: 20 }}>
                    <Text>영리한 소년이었던 왕자는, 제왕학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>왕자의 총명함은 틀림없이 빛을 발하였지만, 고통받는 백성들의 삶에는 좀처럼 관심을 갖지 않습니다.</Text>
                    <Text>충분한 나이가 되자 왕자는 황제의 자리에 앉습니다. 모두의 축복 속에 즉위하였으나, 머지않아 왕자의 폭정이 시작됩니다.</Text>
                    <Text>방탕한 생활을 즐기고, 간신의 아첨에 귀를 기울입니다. 충신들은 좌천됩니다. 빗발치는 아우성에 결국 당신이 나서 왕자를 질책하지만, 당신 또한 먼 도시로 좌천되고 맙니다. 왕국은 돌이킬 수 없는 혼란 속으로 가라앉습니다.</Text>
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