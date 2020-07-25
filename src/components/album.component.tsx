import React from 'react';
import styled from 'styled-components';
import Albums from '../pages/albums';


interface AlbumType{
    userId: number,
    id: number,
    title: string
};

const Album: React.FC<AlbumType> = ({userId, id, title}) => {

    const handleCLick = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        console.log(`I am moving to the this album detail, ${id}`)

    }
    return (
        <AlbumWrapper onClick={handleCLick} >
            <h4>{title}</h4>
            <p>Owned by{userId}</p>
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