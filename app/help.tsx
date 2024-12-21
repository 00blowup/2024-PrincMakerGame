import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { router } from "expo-router";
import { useState, useEffect } from 'react';

const TIME_LIMIT = 5 * 1000;

export default function App() {
    const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT); // 진행 중인 클릭의 남은 제한시간
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer|null>(null);    // 진행 중인 클릭의 timerInterval

    const [startable, setStartable] = useState(true); // 클릭 시작 버튼의 활성화 여부

    const [clickable, setClickable] = useState(false);    // 행동 버튼의 활성화 여부

    const [clickCount, setClickCount] = useState(0);    // 클릭 횟수

    const startTimer = () => {
        setStartable(false);
        setClickable(true);

        const id = setInterval(() => setTimeRemaining(prev => prev - 1000), 1000);
        setTimerInterval(id);
    };

    const stopTimer = () => {
        if(timerInterval != null) {
            clearInterval(timerInterval);
        }
    };

    const timerDate = new Date(timeRemaining);

    const countClick = () => {
        setClickCount(clickCount +1);
    };


    // 아래 useEffect는, 클릭 제한시간이 0초가 되었을 때 실행되는 코드
    useEffect(() =>{
        if (timeRemaining == 0){
            stopTimer();    // 타이머 멈추기
            setTimeRemaining(TIME_LIMIT);    // 제한시간 초기화
            setStartable(true);     // 연습을 다시 시작할 수 있게 버튼을 초기화
            setClickable(false);    // 연습을 다시 시작할 수 있게 버튼을 초기화
            setClickCount(0);   // 클릭 횟수 초기화
            }
        }
    );

    return (
        <View style = {styles.container}>
            <View style = {{ height: 100}}>
                <Text style = {{ textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>게임 방법</Text>
            </View>
            <View style = {{ height: 100, width: 300}}>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>행동 버튼 위의 '연타 시작!'을 누른 뒤,</Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>행동 버튼을 원하는 만큼 연타하세요!</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>연습해보세요!</Text>
                <Text></Text><Text></Text>
                {startable ?
                    (<TouchableOpacity
                        style = {styles.activeStart}
                        onPress = {() => {
                             startTimer();
                             }}
                     >
                        <Text style = {styles.textst}>연타 시작!</Text>
                     </TouchableOpacity>)
                    :
                    (<TouchableOpacity
                        style = {styles.inactiveStart}
                     >
                        <Text style = {styles.textst}>연타 시작!</Text>
                     </TouchableOpacity>)
                }
                {clickable ?
                    (<TouchableOpacity style = {styles.activeBtn} onPress = {countClick}>
                        <Text style = {styles.textst}>연타!</Text>
                        <Text style = {styles.textst}>남은 시간: {timerDate.getSeconds()}</Text>
                    </TouchableOpacity>)
                    :
                    (<TouchableOpacity style = {styles.inactiveBtn}>
                        <Text style = {styles.textst}>행동 버튼</Text>
                    </TouchableOpacity>)
                }
            <Text>클릭 횟수: {clickCount}회</Text>
            </View>
            <View style = {{ margin: 20 }}>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>단계마다 3개의 행동 버튼이 주어집니다.</Text>
                <Text></Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>왼쪽 행동 버튼부터 순서대로 연타합니다.</Text>
                <Text></Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>연타 기회는 행동 버튼마다 딱 한 번씩만 주어집니다.</Text>
                <Text></Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>3개의 행동 모두에 대해 클릭을 완료하면</Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>다음 단계로 성장할 수 있습니다.</Text>
                <Text></Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>최대한 많이 클릭할 수도 있고,</Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>아예 클릭하지 않을 수도 있습니다.</Text>
            </View>
            <View style = {{ margin: 20 }}>
                <Text style = {{ textAlign: 'center',fontSize: 20, fontWeight: 'bold' }}>각 행동의 클릭 횟수에 따라</Text>
                <Text style = {{ textAlign: 'center',fontSize: 20, fontWeight: 'bold' }}>엔딩 루트가 달라집니다!</Text>
            </View>
            <TouchableOpacity onPress = { function() { router.navigate('baby') } }
             style = {{ height: 50, alignItems: 'center', justifyContent: 'center', width: 200, backgroundColor: 'black', margin: 10, borderRadius: 100 }}>
                <Text style = {{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>OK!</Text>
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
        },
    horizontal: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30
        },
    activeStart: {
        width: 100,
        backgroundColor: 'black',
        padding: 10
        },
    inactiveStart: {
        width: 100,
        backgroundColor: 'lightgrey',
        padding: 10
        },
    activeBtn: {
        margin: 10,
        height: 80,
        width: 100,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center'
        },
    inactiveBtn: {
        margin: 10,
        height: 80,
        width: 100,
        backgroundColor: 'lightgrey',
        padding: 10,
        justifyContent: 'center'
        },
    textst: {
        textAlign: 'center',
        color: 'white'
        }
    });