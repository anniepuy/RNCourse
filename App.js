import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  //function for onPress button
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  }

    return (
        <View style={styles.appContainer}>
          <GoalInput onAddGoal={addGoalHandler} />
          <View style={styles.goalsContainer}>
            <FlatList 
              data={courseGoals} 
              renderItem={(itemData) => {
                return < GoalItem text={itemData.item.text}/> 
                }
              }
              alwaysBounceVertical={false}
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
