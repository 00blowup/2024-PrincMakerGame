import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/NvuLDo3.png';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <ScrollView>
            <View style={styles.container}>
                <View style = {{ marginTop: 30}}>
                    <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>엔딩 12</Text>
                </View>
                <View style = {{ height: 80 }}>
                    <Text style = {{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>대마법사</Text>
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
                    <Text>타고난 강한 마력과 총명함으로 왕자의 마법 실력은 빠르게 성장합니다. 자연을 사랑하는 왕자였기에, 왕자는 자연의 섭리와 조화에 기반한 마법을 깊이 공부합니다.</Text>
                    <Text>자연을 이루는 요소인 공기, 물, 불, 땅을 자유자재로 다루는 뛰어난 마법사가 되었습니다.</Text>
                    <Text>긴 시간이 흘러 왕국의 위대한 대마법사가 죽음을 앞두게 되었습니다. 대마법사는 왕자를 곁으로 불러, 자신의 뒤를 이어주라고 부탁합니다.</Text>
                    <Text>대마법사가 된 후에도 왕자의 온화한 품성은 빛을 발합니다. 나이가 무색하게 후배들과 스스럼없이 장난을 주고받습니다. 그런 그를 모두가 사랑합니다.</Text>
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