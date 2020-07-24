import React, { useState, useEffect } from 'react';
import Album from '../components/album.component';
import styled from 'styled-components';

interface AlbumsType {
    userId: number,
    id: number,
    title: string
};


const Albums = (): JSX.Element => {
    const [albums, setAlbums] = useState<AlbumsType[]>([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(posts => setAlbums(posts))
    }, []);
    return (
        <AlbumsWrapper>
            {
                albums.map((album: AlbumsType): JSX.Element => (
                    <Album key={album.id}   {...album} />)
                )
            }

        </AlbumsWrapper>
    )
};

export default Albums;

const AlbumsWrapper = styled.div`
width: 90%;
margin: 60px auto;
display: flex;
flex-wrap: wrap;
felx-gap: 20px;
`