import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyles: {
        width: "auto",

        padding: 5,
        marginBottom: 10,

        borderWidth: 1,
        borderColor: 'gray',

        fontSize: 24,
    }
})

class Main extends React.Component {
    render() {
        const {navigation} = this.props;

        const attachButtonTask1 = () => {
            navigation.navigate("Task1");
        }

        const attachButtonTask2 = () => {
            navigation.navigate("Task2");
        }

        const attachButtonTask3 = () => {
            navigation.navigate("Task3");
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={attachButtonTask1}>
                    <Text style={styles.buttonStyles}>{"Task1"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={attachButtonTask2}>
                    <Text style={styles.buttonStyles}>{"Task2"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={attachButtonTask3}>
                    <Text style={styles.buttonStyles}>{"Task3"}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Main;