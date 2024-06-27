import React from 'react'
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native'
import {MovieListProps} from "../types/app";
import MovieList from "../components/movies/MovieList";

const movieList: MovieListProps[] = [
    {
        title: 'Now Playing in Theater',
        path: 'movie/now_playing?language=en-US&page=1',
        coverType: 'backdrop',
    },
    {
        title: 'Upcoming Movies',
        path: 'movie/upcoming?language=en-US&page=1',
        coverType: 'poster',
    },
    {
        title: 'Top Rated Movies',
        path: 'movie/top_rated?language=en-US&page=1',
        coverType: 'poster',
    },
    {
        title: 'Popular Movies',
        path: 'movie/popular?language=en-US&page=1',
        coverType: 'poster',
    },
]

export default function Home({navigation}: any): JSX.Element {
    return (
        <ScrollView>
            <View style={styles.container}>
                {movieList.map((movieList) => (
                    <MovieList title={movieList.title}
                               path={movieList.path}
                               coverType={movieList.coverType}
                               key={movieList.title}
                    />
                ))}
                <StatusBar translucent={false}/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight ?? 32,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 16,
    },
})