import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 1,

        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonContainer: {
        marginTop: 50,
    },
    mainButton: {
        marginTop: 20,
        padding: 3,

        borderWidth: 1,
        borderColor: 'gray'
    },
});

class Task2 extends React.Component {
    state = {
        firstRow: "Row1",
        secondRow: "Row2",
        thirdRow: "Row3"
    }

    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.cell}><Text>{this.state.firstRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.firstRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.firstRow}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}><Text>{this.state.secondRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.secondRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.secondRow}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}><Text>{this.state.thirdRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.thirdRow}</Text></View>
                    <View style={styles.cell}><Text>{this.state.thirdRow}</Text></View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Main");
                    }}>
                        <Text style={styles.mainButton}>{"Return to main page"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Task2;