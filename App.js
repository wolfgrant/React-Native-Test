import { View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import global from './styles/global-style'
import GoalItem from './components/goal-item';
import GoalForm from './components/goal-form';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const globalStyles = global

  //Si la entrada de texto está en el mismo componente como lo sería App.js, quedaría de esta forma
  /* const [goalText, setGoalText] = useState(''); */
  const [courseGoals, setCourseGoals] = useState([])

  //Si la entrada de texto está en el mismo componente como lo sería App.js, quedaría de esta forma
  /* function goalInputHandler(enteredText) {
    setGoalText(enteredText)
  }; */

  //Si la entrada de texto está en el mismo componente como lo sería App.js, quedaría de esta forma
  /* function addGoalHandler() { */
  function addGoalHandler(goalText) {
    //Esta no es la mejor forma de hacerlo, ya que es una manera del javascript standar, 
    //pues existe mejores formas en react
    /* setCourseGoals([...courseGoals, goal])  */

    //Esta manera es mejor ya que es más mantenible y lleva buenas prácticas
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      //Este es para la flatList ya que funciona mejor con un array de objetos, el flatList busca propiedad key, si se coloca ID no va a funcionar como debería
      //En caso de que no tenga un key, se debe manejar el flatlist con una propiedad llamada keyExtractor
      { text: goalText, id: Math.random().toString() },

      //Es es para el scrollView
      /* goalText, */
    ]);
    //Se puede colocar el cambio de estado del modal en este método o en directamente en el componente GoalForm
    /* closeAddGoalHandler() */

  };

  //Esto es si se quiere eliminar el dato por medio del index
  /* function deleteItem(index){ */

  //Si se quiere eliminar por medio de un filter con respecto a un dato que exista, se hace así
  function deleteItem(id) {
    //Esto es si se quiere eliminar el dato por medio del index
    /* setCourseGoals(currentCourseGoal => [...currentCourseGoal.slice(0, index)]); */

    //Si se quiere eliminar por medio de un filter con respecto a un dato que exista, se hace así
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }

  function closeAddGoalHandler () {
    setModalIsVisible(false);
  }

  /* addGoal = () => {
    console.log('sadas')
  } */

  return (
    <>
    <StatusBar style='light'/>
    <View style={globalStyles.appContainer}>
      <Button title='Agregar nuevo logro' color="#a065ec" onPress={startAddGoalHandler}/>
      
      {/* Aqui solo estoy probando como hacer condicionales con ese estado de modalIsVisible */}
      {/* {modalIsVisible && <GoalForm onAddGoal={addGoalHandler} />} */}
      <GoalForm onAddGoal={addGoalHandler} visible={modalIsVisible} onCloseModal={closeAddGoalHandler}/>
      <View style={globalStyles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} index={itemData.index} deleteGoalItem={deleteItem} />
          //Se puede crear un componente comun y corriente directamente en el return o se puede crear un componente aparte como lo es el GoalItem
          /* return (
            
            <View style={globalStyles.goalsContainer.goalItem}>
              <Text style={globalStyles.goalsContainer.goalItem.goalText} >{itemData.item.text}</Text>
            </View>
          ) */
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />

        {/* <ScrollView alwaysBounceVertical={false}> */}
        {/* {courseGoals.map((goal, index) => */}
        {/* <View key={index} style={globalStyles.goalsContainer.goalItem}>
              <Text style={globalStyles.goalsContainer.goalItem.goalText} >{goal}</Text>
            </View> */}
        {/* )}; */}
        {/* </ScrollView> */}
      </View>
    </View>
    </>
  );
}

//Si se desea crear estilos para una sola vista, se puede hacer de esta manera
//Si se quiere tener estilos globales se puede suar un archivo de estilos tal como lo cree con globalStyles
/* const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}) */