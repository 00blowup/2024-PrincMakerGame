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
                <View style = {{ height: 500, width: 300, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style = {{ textAlign: 'center' }}>- 결과 일러스트 영역 -</Text>
                </View>
                <View style = {{ height: 300, width: 300, marginTop: 20 }}>
                    <Text>영리한 소년이었던 왕자는, 마법학에 깊은 관심을 가진 청년으로 자라났습니다.</Text>
                    <Text>타고난 강한 마력과 총명함으로 왕자의 마법 실력은 빠르게 성장합니다. 자연을 사랑하는 왕자였기에, 왕자는 자연의 섭리와 조화에 기반한 마법을 깊이 공부합니다.</Text>
                    <Text>마법을 배우는 이유가 무엇이냐고 왕자에게 묻자, 마법은 자연의 힘을 빌려오는 것이며, 이것에 감사하는 마음으로 모두의 유익을 위해 올바른 마법을 추구해야 한다고 답합니다.</Text>
                    <Text>왕자는 왕실 마법사들의 총애를 받으며 성장합니다. 긴 시간이 흘러 왕국의 위대한 대마법사가 죽음을 앞두게 되었습니다. 대마법사는 왕자를 곁으로 불러, 자신의 뒤를 이어주기를 부탁합니다.</Text>
                    <Text>대마법사가 된 왕자는 모든 마법사들의 존경의 대상이자, 마법학의 빛나는 발전을 이루어가는 위인으로 평가받습니다.</Text>
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