import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default function Home({navigation}: any): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="PERGI KE MOVIE DETAIL"
                    onPress={() => navigation.navigate('DETAIL')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})