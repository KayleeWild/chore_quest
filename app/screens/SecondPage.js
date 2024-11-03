import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import colors from '../config/colors';

function SecondPage(props) {
    return (
        <View style={styles.background}>
            <View style={styles.addButton}>
                <Button title='Add Chores!' color={colors.dark}/>
            </View>
            <Text style={styles.text}>No chores added.</Text>
            <View style={styles.navigation}>
                <Button title='Home' color={colors.dark} onPress={() => console.log("home button pressed")}/>
                <Button title='Chart' color={colors.dark} onPress={() => console.log("second button pressed")}/>
                <Button title='Gems' color={colors.dark} onPress={() => console.log("third button pressed")}/>
                <Button title='Settings' color={colors.dark} onPress={() => console.log("settings button pressed")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 20,
        fontSize: 25,
        color: colors.dark
    },
    background: {
        height: '100%',
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigation:{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    text:{
        padding: 20
    }
})

export default SecondPage;