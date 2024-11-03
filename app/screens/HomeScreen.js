import React from 'react';
import { Button, ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import SecondPage from './SecondPage';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.main}>
                <View style={styles.addButton}>
                    <Text style={styles.addChildButton} onPress={() => console.log("Add child pressed")}>Add Child</Text>
                </View>
            </View>
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
    background:{
        backgroundColor: colors.light,
        flex: 1,
        justifyContent: 'space-between'
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%'
    },
    navigation:{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: '100%',
        bottom: 0
    }
})
export default HomeScreen;