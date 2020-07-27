import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CustomButton from '../components/CustomButton';


interface AlbumType{
    userId?: number,
    id: number,
    title: string
};

const Album: React.FC<RouteComponentProps<{}> & AlbumType> = ({userId, title, history}) => {

    return (
        <AlbumWrapper >
            <div className="album-data">
               <span className="title">{title}</span>
               <span className ="Owner"><strong>Owner:</strong>{userId}</span>
            </div>
        </AlbumWrapper >
    )
}

export default withRouter(Album);


const AlbumWrapper = styled.div`
    width: 25%;
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-conten: center;
  position: relative;
  border: solid black 1px;
  padding: 1rem;
  margin: 1rem;
  & * {
    font-family: "Times New Roman", Times, serif;
  }
  & .album-data{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-conten: center;
      .title{
        text-transform: uppercase;
        margin: 1rem 0;
        font-family: bold;
      }
  }
   }
`