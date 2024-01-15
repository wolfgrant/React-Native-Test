import React, {StyleSheet} from 'react-native';

const global = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        textInput: {
            borderWidth: 1,
            borderColor: '#cccccc',
            flex: 2,
            marginRight: 8,
            padding: 8,
        },
    },
    
    goalsContainer: {
        flex: 5,
        goalItem: {
            margin: 8,
            borderRadius: 6,
            backgroundColor: '#5e0acc',
            padding: 8,
            goalText: {
                color: 'white',
            }
        },
    }
  });

  module.exports = global;