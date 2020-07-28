    import React, { useState, useEffect } from 'react';
    import { useSelector, useDispatch} from 'react-redux';
    import Album from '../components/album.component';
    import { requestAlbumList } from '../redux/actions/album-action'
    import styled from 'styled-components';
    import {
        flexbox, layout, typography
    } from 'styled-system'

    interface ALbumType {
        userId: number,
        id: number,
        title: string,
        key?: string | number
    }
    interface AlbumListStateType {
        loading?: boolean,
        albums?: [ALbumType],
        error?: string

    };


    const Albums: React.FC = () => {
        
        const albumList: AlbumListStateType  = useSelector(state => state.albumList);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(requestAlbumList())
        }, []);

        return (
            <AlbumsWrapper
                width={0.9}
                display='flex'
                flexWrap='wrap'
            >
                {
                    albumList.loading ? 
                    <h2 
                        textAlign='center'  
                         letterSpacing='0.1em'
                    >Loading...</h2> :
                    albumList.error ?
                    <h2
                        textAlign='center'
                        letterSpacing='0.1em'
                        color='red'
                    >Opps something has gone wrong</h2>:

                        albumList.albums.map((album: ALbumType): React.ReactNode => (
                            <Album key={album.id} {...album} />
                        ))
                }
            </AlbumsWrapper>
        )
    };

    export default Albums;

    const AlbumsWrapper = styled.div`
    ${flexbox}
    ${layout}
    ${typography}
    margin: 60px auto;
    `