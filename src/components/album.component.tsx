import React from 'react';
import styled from 'styled-components';
import Albums from '../pages/albums';


interface Album{
    userId: number,
    id: number,
    title: string
};

const Album = (props: Album) => {

    const handleCLick = (e: any): void => {
        e.preventDefault();
        console.log(`I am moving to the this album detail, ${props.id}`)

    }
    return (
        <AlbumWrapper onClick={handleCLick} >
            <h4>{props.title}</h4>
            <p>Owned by{props.userId}</p>
        </AlbumWrapper >
    )
}

export default Album;


const AlbumWrapper = styled.div`
width: 30%;
margin: 0 10px 30px;
border: solid black 1px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`