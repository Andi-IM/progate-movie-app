import React, {useEffect, useState} from 'react'
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import {API_ACCESS_TOKEN} from "@env";
import {MovieDetail} from "../types/app";
import {FontAwesome} from "@expo/vector-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function Detail({route}: any) {
    const {id} = route.params
    const [movie, setMovie] = useState<MovieDetail>()

    useEffect(() => {
        getMovieDetail()
    }, [])

    const renderReleaseYear = (releaseDate: any) => {
        const year = new Date(releaseDate).getFullYear();
        return <Text style={{marginBottom: 10}}>Released: {year}</Text>;
    };

    const renderRating = (voteAverage: number) => {
        const fullStars = Math.floor(voteAverage / 2); // Calculate full stars
        const halfStar = voteAverage % 2 !== 0; // Check for half star

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesome key={i} icon={faStar} style={{color: 'gold'}} size={20}/>);
        }
        if (halfStar) {
            stars.push(<FontAwesome key={fullStars} icon={faStar} style={{color: 'gold'}} size={20} half/>);
        }

        return (
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                {stars}
                <Text style={{marginLeft: 5}}>{voteAverage.toFixed(1)}</Text>
            </View>
        );
    };

    const getMovieDetail = () => {
        const url = `https://api.themoviedb.org/3/movie/${id}`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
        }

        fetch(url, options)
            .then(async (response) => await response.json())
            .then((response) => {
                setMovie(response)
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}} // Adjust image URL if needed
                    style={{width: '100%', height: 200, resizeMode: 'contain'}}
                />
                <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 10}}>{movie?.title}</Text>
                {renderRating(movie?.vote_average ?? 0)}
                {renderReleaseYear(movie?.release_date)}
                <Text style={{marginBottom: 10}}>{movie?.overview}</Text>
                <Text style={{fontSize: 30}}>Movie ID: {id}</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
