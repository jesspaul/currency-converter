import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1
    }
});

export default () => {
    return (
        <View style={styles.container}>
            {/* add line in app.json to remove translucent background from android status bar */}
            <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
        </View>
    );
}