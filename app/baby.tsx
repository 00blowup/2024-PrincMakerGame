import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { router } from "expo-router";
import { useState, useEffect } from 'react';

const TIME_LIMIT = 5 * 1000;
const imgUrl = 'https://i.imgur.com/aKUgTu7.png';

export default function App() {
    const [completed, setCompleted] = useState(false);  // 3개 행동의 클릭을 모두 끝냈는지 여부

    const [firstCount, setFirstCount] = useState(0);    // 좌측 행동의 최종 클릭 횟수
    const [secondCount, setSecondCount] = useState(0);  // 중앙 행동의 최종 클릭 횟수
    const [thirdCount, setThirdCount] = useState(0);    // 우측 행동의 최종 클릭 횟수

    const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT); // 진행 중인 클릭의 남은 제한시간
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer|null>(null);    // 진행 중인 클릭의 timerInterval

    const [startableOne, setStartableOne] = useState(true); // 좌측 클릭 시작 버튼의 활성화 여부
    const [startableTwo, setStartableTwo] = useState(false);    // 중앙 클릭 시작 버튼의 활성화 여부
    const [startableThree, setStartableThree] = useState(false);    // 우측 클릭 시작 버튼의 활성화 여부

    const [clickableOne, setClickableOne] = useState(false);    // 좌측 행동 버튼의 활성화 여부
    const [clickableTwo, setClickableTwo] = useState(false);    // 중앙 행동 버튼의 활성화 여부
    const [clickableThree, setClickableThree] = useState(false);    // 우측 행동 버튼의 활성화 여부

    const [clickCount, setClickCount] = useState(0);    // 진행 중인 클릭의 클릭 횟수

    const startTimer = () => {
        if(startableOne) {  // 좌측 행동 버튼을 클릭할 순서인 경우
            setStartableOne(false); // 좌측 클릭 시작 버튼 비활성화
            setClickableOne(true);  // 좌측 행동 버튼 활성화
        }
        else if(startableTwo) { // 중앙 행동 버튼을 클릭할 순서인 경우
            setStartableTwo(false); // 중앙 클릭 시작 버튼 비활성화
            setClickableTwo(true);  // 중앙 행동 버튼 활성화
        }
        else if(startableThree) { // 우측 행동 버튼을 클릭할 순서인 경우
            setStartableThree(false); // 우측 클릭 시작 버튼 비활성화
            setClickableThree(true);  // 우측 행동 버튼 활성화
        }

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

            if(clickableOne) {  // 좌측 행동 버튼의 클릭 제한시간이 끝난 경우
                setClickableOne(false); // 좌측 행동 버튼 비활성화
                setFirstCount(clickCount);  // 좌측 행동의 최종 클릭 횟수 기록
                setStartableTwo(true);  // 중앙 클릭 시작 버튼 활성화
            }
            else if(clickableTwo) {  // 중앙 행동 버튼의 클릭 제한시간이 끝난 경우
                setClickableTwo(false); // 중앙 행동 버튼 비활성화
                setSecondCount(clickCount);  // 중앙 행동의 최종 클릭 횟수 기록
                setStartableThree(true);  // 우측 클릭 시작 버튼 활성화
            }
            else if(clickableThree) {  // 우측 행동 버튼의 클릭 제한시간이 끝난 경우
                setClickableThree(false); // 우측 행동 버튼 비활성화
                setThirdCount(clickCount);  // 우측 행동의 최종 클릭 횟수 기록
                setCompleted(true);  // 모든 클릭 완료 여부 업데이트
            }
            setClickCount(0);   // 클릭 횟수 초기화
            }
        }
    );

    // 소년기로의 성장분기
    const grow = () => {
        if(firstCount == secondCount && secondCount == thirdCount) {
            router.navigate('childquiet');}
        else if (firstCount == secondCount) {
            router.navigate('childquiet');}
        else if (firstCount == thirdCount) {
            router.navigate('childsmart');}
        else if (secondCount == thirdCount) {
            router.navigate('childactive');}
        else if (firstCount > secondCount && firstCount > thirdCount) {
            router.navigate('childquiet');}
        else if (secondCount > firstCount && secondCount > thirdCount) {
            router.navigate('childactive');}
        else router.navigate('childsmart');
    };

    return (
        <View style = {styles.container}>
            <View style = {{ height: 100, width: 200}}>
                <Text style = {{ textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>유아기</Text>
            </View>
            <View style = {{ height: 100, width: 300}}>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>행동 버튼 위의 '연타 시작!'을 누른 뒤,</Text>
                <Text style = {{ textAlign: 'center', fontWeight: 'bold' }}>행동 버튼을 원하는 만큼 연타하세요!</Text>
            </View>
                <Image style = {{ height: 300, width: 300 }}
                    src = {imgUrl}
                />
            <View style = {styles.horizontal}>
                <View style = {styles.container}>
                    {startableOne ?
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
                    {clickableOne ?
                        (<TouchableOpacity style = {styles.activeBtn} onPress = {countClick}>
                            <Text style = {styles.textst}>연타!</Text>
                            <Text style = {styles.textst}>남은 시간: {timerDate.getSeconds()}</Text>
                        </TouchableOpacity>)
                        :
                        (<TouchableOpacity style = {styles.inactiveBtn}>
                            <Text style = {styles.textst}>재우기</Text>
                        </TouchableOpacity>)
                    }
                </View>
                <View style = {styles.container}>
                    {startableTwo ?
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
                    {clickableTwo ?
                        (<TouchableOpacity style = {styles.activeBtn} onPress = {countClick}>
                            <Text style = {styles.textst}>연타!</Text>
                            <Text style = {styles.textst}>남은 시간: {timerDate.getSeconds()}</Text>
                        </TouchableOpacity>)
                        :
                        (<TouchableOpacity style = {styles.inactiveBtn}>
                            <Text style = {styles.textst}>노래해주기</Text>
                        </TouchableOpacity>)
                    }
                </View>
                <View style = {styles.container}>
                    {startableThree ?
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
                    {clickableThree ?
                        (<TouchableOpacity style = {styles.activeBtn} onPress = {countClick}>
                            <Text style = {styles.textst}>연타!</Text>
                            <Text style = {styles.textst}>남은 시간: {timerDate.getSeconds()}</Text>
                        </TouchableOpacity>)
                        :
                        (<TouchableOpacity style = {styles.inactiveBtn}>
                            <Text style = {styles.textst}>책 읽어주기</Text>
                        </TouchableOpacity>)
                    }
                </View>
            </View>
            {completed ?
                (<TouchableOpacity style = {styles.activeStart} onPress = {grow}>
                    <Text style = {styles.textst}>성장하기</Text>
                </TouchableOpacity>
                )
                :
                (<TouchableOpacity style = {styles.inactiveStart}>
                    <Text style = {styles.textst}>성장하기</Text>
                </TouchableOpacity>
                )
            }
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