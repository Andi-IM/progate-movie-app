import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {API_URL, API_ACCESS_TOKEN} from "@env";

export default function MovieDetail({navigation}: any) {
    const fetchData = (): void => {
        if (API_ACCESS_TOKEN == null || API_URL == null) {
            throw new Error('ENV not found')
        }

        const options: RequestInit = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
        }

        fetch(API_URL, options)
            .then(async (response: Response) => await response.json())
            .then((response: string): void => {
                console.log(response)
            })
            .catch((err: string) => console.log(err))
    }
    return (
        <View style={styles.container}>
            <Text>Movie Detail</Text>
            <Button title="Fetch Data" onPress={() => fetchData()}/>
            <Button title="Kembali" onPress={() => navigation.goBack()}/>
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
