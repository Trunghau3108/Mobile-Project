import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  
  const [weight,setWeight] = useState(3);
  const [height,setHeight] = useState(0);
  const [result,setResult] = useState(0);

  const handleSubmit = (text) => {
    setResult(parseFloat(text));
    const heightM = height/100;
    const bmi =  weight / Math.pow(heightM,2)
    result = bmi;
  } 

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          <Text>Weight</Text>
          <TextInput  style={styles.textInput}
          onChangeText={newtext => setWeight(newtext)}
          value={weight.toString()}
          />
          <Text>Height</Text>
          <TextInput style={styles.textInput} 
          onChangeText={newtext => setHeight(newtext)}
          value={height.toString()}/>
          <Text>Result: {setResult(result)} </Text>
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handleSubmit()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:270,
  },
  inner: {
    padding: 24,
    flex: 1,
   
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
   
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
   
  },
});

export default KeyboardAvoidingComponent;

    // <KeyboardAvoidingView behavior='padding'>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
    //     <View style={styles.container}>   
    //       <Text>username</Text>
    //       <TextInput
    //         style={styles.textInput}
    //         onChangeText={handleHeight}
    //       />
  
    //       <Text>password</Text>
    //       <TextInput
    //         style={styles.textInput}
    //         onChangeText={handleWeight}
    //         value={weight.toString()}
    //       />
  
    //       <Text>BMI: </Text>
  
    //       <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
    //         <Text style={styles.text}>Result</Text>
  
    //       </TouchableOpacity>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>