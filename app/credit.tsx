import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { router } from "expo-router";

export default function Index() {
  return (
    <View style = {styles.container}>
        <Text style= {{fontSize: 30, fontWeight: 'bold'}}>CREDIT</Text>
        <Text>게임 개발 및 일러스트: 노하은</Text>
        <Text></Text>
        <Text style = {{fontWeight: 'bold'}}>Github handle: @00blowup</Text>
        <Text style = {{fontWeight: 'bold'}}>Instagram: @haeun_momo</Text>
        <View style = {{margin: 20}}>
            <Text>본 게임은 2024년 2학기 이화여자대학교 '모바일앱제작' 수업의 최종과제 결과물로서, 수익을 창출하지 않습니다.</Text>
            <Text></Text>
            <Text>본 게임은 게임 시리즈 'Princess Maker'의 오마주입니다. 엔딩에는 애니메이션 'Avatar the Last Airbender', 영화 'Furiosa: A Mad Max Saga', 'Gladiator', 만화 'Berserk' 등의 오마주가 포함되어 있습니다.</Text>
            <Text>타이틀 이미지에는 Times New Roman 글꼴이 사용되었습니다.</Text>
        </View>
        <TouchableOpacity onPress = { function() { router.navigate('') } }
         style = {{ height: 50, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'black', margin: 10, borderRadius: 100 }}>
            <Text style = {{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>닫기</Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        }
    });