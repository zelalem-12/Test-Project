import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Album from '../components/album.component';
import { requestAlbumList } from '../redux/actions/album-action'
import styled from 'styled-components';

interface AlbumsType {
    userId: number,
    id: number,
    title: string
};


const Albums = (): JSX.Element => {
    
    const albumList = useSelector(state => state.albumList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestAlbumList())
    }, []);

    return (
        <AlbumsWrapper>
            {
                albumList.loading ? (<h2>...Loading</h2>) :
                    albumList.albums.map((album: AlbumsType): JSX.Element => (
                        <Album key={album.id} {...album} />
                    ))
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