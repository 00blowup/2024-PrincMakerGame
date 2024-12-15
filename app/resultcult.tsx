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
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 1</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>사이비 교주</Text>
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
                    <Text>조용한 소년이었던 왕자는, 신학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>저명한 성직자들이 왕자의 스승이 되어주었습니다. 그러나, 시간이 지날수록 성직자들에게서 우려의 목소리가 들려옵니다. 왕자의 견해가 성서의 가르침과 점점 멀어지고 있다는 것이었습니다.</Text>
                    <Text>어느 어두운 그믐날 밤, 왕자는 아무도 모르게 궁을 빠져나갔습니다.</Text>
                    <Text>그 뒤로 왕자가 어디에 있는지, 살아있기는 한지, 아무것도 알 수 없었습니다. 그러나... 왕자가 떠난 후 몇 년이 지났을 무렵, 왕자와 매우 닮은 거짓 선지자가 백성들 사이에 위세를 떨친다는 풍문이 들려옵니다.</Text>
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