import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const imgUrl = 'https://i.imgur.com/uGWWq4S.png';

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
                <Image style = {{ height: 500, width: 300 }}
                    src = {imgUrl}
                />

                <View style = {{ width: 300, marginTop: 20, marginBottom: 50 }}>
                    <Text>활발한 소년이었던 왕자는, 무예에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>당신과 함께 전장을 누빈 최고의 장수들이 기꺼이 왕자의 스승이 되어주었습니다. 왕자는 무술 뿐만 아니라 리더십까지 갖춘 인재로 평가받습니다.</Text>
                    <Text>그 후로도 계속해서 정진하여, 왕자는 수도와 왕궁의 방위를 책임지는 왕실 기사단의 단장을 맡게 됩니다. 왕실 기사단은 명실상부 모든 이가 인정하는 가장 강하고 고귀한 기사단으로 자리매김합니다.</Text>
                    <Text>그를 동경하는 백성들은 "용맹한 모습이 마치 한 마리의 매와 같다"고 말합니다.</Text>
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