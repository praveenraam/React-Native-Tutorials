import React from "react";
import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element  {
    const isDarkMode = useColorScheme() === 'light';

    return (
        <View style={[styles.container, isDarkMode && styles.darkBackground]}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                Good Morning
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkBackground: {
        backgroundColor: 'black',
    },
    whiteText: {
        color: 'white',
    },
    blackText: {
        color: 'black',
    },
});

export default AppPro;
