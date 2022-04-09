import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState} from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    //function to listen to keyinput
    function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal!" 
                onChange={goalInputHandler}
                value={enteredGoalText} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='#b180f0' />
                    </View>
                    <View style={styles.button} color='#f31282'>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16,
      },
      button: {
          width: '30%',
          marginHorizontal: 8,
      },
      image: {
          width: 100,
          height: 100,
          margin: 20,
      }
})