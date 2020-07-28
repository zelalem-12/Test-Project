import React from 'react';
import styled from 'styled-components';
import { 
    layout, space, border, typography, flexbox, textStyle
 } from 'styled-system';


interface TodoType {
    userId: number,
    id?: number;
    title: string;
};

const Todo: React.FC<TodoType> = ({ userId, title }) => {

    return (
        <TodoWrapper
        width={[1, 1 / 2, 1 / 4]}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
         border='1px solid'
         p='0.5em'
         m='2em'
         p={[2,3]}
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
                ><strong>Done By:</strong>{userId}</span>
        </TodoWrapper>
    )
}

export default Todo;;


const TodoWrapper = styled.div`
${layout}
${border}
${space}
${typography}
${flexbox}
   }
`
const Title = styled.span`
text-transform: uppercase;
`