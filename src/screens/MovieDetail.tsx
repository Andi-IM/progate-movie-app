import {StyleSheet, View, Text, Button} from "react-native";
import React from "react";

export default function MovieDetail({navigation}: any) {
    const fetchData = (): void => {
        const ACCESS_TOKEN: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjVmZjkzODJiZjFiZmY2MWMyMjFhMmVlMGMzMTY2MCIsIm5iZiI6MTcxOTQ3MTExMS41ODc1ODYsInN1YiI6IjYxMjc2M2VhZThhM2UxMDA2MjNhM2Y1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQ0n8W3kWEBTmOSkD_bbi5ufl2TeV4Til0UMtLCuAnI';
        const url: string = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        const options: RequestInit = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        }

        fetch(url, options)
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
