import global from '../styles/global-style'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';


const globalStyles = global;
 
function GoalItem(props) {
    return (
        <View style={globalStyles.goalsContainer.goalItem}>
            <Text style={globalStyles.goalsContainer.goalItem.goalText} >{props.text}</Text>
        </View>
    );
};

GoalItem.propTypes = {
    text: PropTypes.string, // No es necesario añadir .isRequired aquí siempre y cuando esa propiedad no sea requerida
};

export default GoalItem;