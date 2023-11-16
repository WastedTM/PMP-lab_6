import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 50
    },
    buttons: {
        marginRight: 5,
        marginLeft: 5,
        padding: 3,

        borderWidth: 1,
    },
    mainButton: {
        marginTop: 20,
        padding: 3,

        borderWidth: 1,
        borderColor: 'gray'
    },
})

class Task3 extends React.Component {
    state = {
        width: 100,
        height: 100
    }

    render() {
        const width = this.state.width;
        const height = this.state.height;
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={{width: width, height: height, borderWidth: 1}}/>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => {this.setState({width: width + 10})}}>
                        <Text style={styles.buttons}>{"Width+"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {if(width >= 10)this.setState({width: width - 10})}}>
                        <Text style={styles.buttons}>{"Width-"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.setState({height: height + 10})}}>
                        <Text style={styles.buttons}>{"Height+"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {if(height >= 10)this.setState({height: height - 10})}}>
                        <Text style={styles.buttons}>{"Height-"}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Main");
                }}>
                    <Text style={styles.mainButton}>{"Return to main page"}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Task3;