import React from "react";
import { space, width, fontSize, color } from "styled-system";
import styled from "styled-components";

const App = (): JSX.Element => {
  return (
    <Box bg="green" fontSize={24} width={200} p={20} m="50px auto" color ='white'>
      Test Project
    </Box>
  );
};
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
export default App;
