import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import {
    layout, space, border, typography, flexbox, textStyle
} from 'styled-system';


interface AlbumType{
    userId?: number,
    id: number,
    title: string
};

const Album: React.FC<RouteComponentProps<{}> & AlbumType> = ({userId, title, history}) => {

    return (
        <AlbumWrapper
            width={[1, 1 / 2, 1 / 4]}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            border='1px solid'
            p='0.5em'
            m='2em'
            p={[2, 3]}
            m={[2, 3]}
            fontFamily='Times New Roman'
            > 
               <Title
                    fontWeight='bold'
                    mx='auto'
                    my={[0.5, 1, 3]}
               >{title}</Title>
               <span 
                    mx='auto'
                    my={[0.5, 1, 3]}
                    ><strong>Owner:</strong>{userId}</span>
        </AlbumWrapper >
    )
}

export default withRouter(Album);


const AlbumWrapper = styled.div`
${layout}
${border}
${space}
${layout}
${border}
${space}
${typography}
${flexbox}
${textStyle}
   }
`

const Title = styled.span`
text-transform: uppercase;
`