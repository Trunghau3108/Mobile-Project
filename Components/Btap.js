import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

const Btap = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [currentTime, setCurrentTime] = useState(0);
  const [lapTimes, setLapTimes] = useState([]);
  const [initialTime, setInitialTime] = useState(0);

  const handleLap = () => {
    if (isTimerStart) {
      setLapTimes((prevLapTimes) => [...prevLapTimes, currentTime]);
    }
  };

  const handleClearLaps = () => {
    setLapTimes([]);
  };

  useEffect(() => {
    let interval = null;
    if (isTimerStart) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerStart]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');

    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>{formatTime(currentTime)}</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="gray"
            onPress={() => {
              setIsTimerStart(!isTimerStart);
            }}
          >
            <Text>{!isTimerStart ? 'START' : 'STOP'}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="gray"
            onPress={() => {
              handleLap();
            }}
          >
            <Text>LAP</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="gray"
            onPress={() => {
              handleClearLaps();
            }}
          >
            <Text>CLEAR LAP</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.footer}>
        {lapTimes.map((lapTime, index) => (
          <View key={index} style={styles.lap}>
            <Text style={styles.lapText}>{`Lap #${index + 1}`}</Text>
            <Text style={styles.lapText}>{formatTime(lapTime)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
  },
  timer: {
    fontSize: 60,
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 10,
  },
  lapText: {
    fontSize: 30,
  },
});

export default Btap;
