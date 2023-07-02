import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AppState = {
  NotRunning: 0,
  Running: 1,
  Stop: 2,
};

function Baitapcuathay() {
  const [currentState, setCurrentState] = useState(AppState.NotRunning);
  const [listLap, setListLap] = useState([]);
  const [timesLap, setTimesLap] = useState([]);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval;
    if (currentState === AppState.Running) {
      setStartTime(new Date().getTime());
      interval = setInterval(() => {
        const newTime = new Date().getTime();
        setTimesLap(newTime - startTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentState, startTime]);

  const getFirstButtonTitle = () => {
    if (currentState === AppState.NotRunning) {
      return 'Start';
    } else if (currentState === AppState.Running) {
      return 'Stop';
    } else if (currentState === AppState.Stop) {
      return 'Reset';
    }
  };

  const isDisableLap = () => {
    return currentState !== AppState.Running;
  };

  const handleFirstButtonPress = () => {
    if (currentState === AppState.Stop) {
      setListLap([]);
      setTimesLap([]);
      setStartTime(null);
    }
    setCurrentState(currentState === AppState.Stop ? AppState.NotRunning : currentState + 1);
  };

  const handleLapButtonPress = () => {
    setListLap([...listLap, (listLap.length + 1).toString()]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.timerText}>00:00:00</Text>
      </View>

      <View style={styles.center}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.button, { marginRight: 50 }]}
            onPress={handleFirstButtonPress}>
            <Text>{getFirstButtonTitle()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            disabled={isDisableLap()}
            onPress={handleLapButtonPress}>
            <Text>Lap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.bottom}>
        {listLap.map((item, index) => {
          return (
            <View key={index} style={styles.lapView}>
              <Text style={styles.lapText}>Lap #{index + 1}</Text>
              <Text style={styles.lapText}>Lap {item}</Text>
            </View>
          );
        }).reverse()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    alignItems: 'center',
    paddingVertical: 100,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    paddingHorizontal: 40,
    marginTop: 20,
    flex: 1
  },
  timerText: {
    fontSize: 60
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50
  },
  lapView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    marginBottom: 10
  },
  lapText: {
    fontSize: 25
  }
});

export default Baitapcuathay;
