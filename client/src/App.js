import React from 'react';
import { Grommet, Box } from "grommet";
import CalendarSelector from './components/CalendarSelector';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeList from './components/EmployeeList';
import AddButton from './components/AddButton'

function App() {
  return (
    <Grommet>
      <Box 
        width={"small"}
        align="center"
        border={
                  {
                  size: "small",
                  color: "brand",
                  }
                }
      >
        <CalendarSelector/>
        <EmployeeSearch/>
        <EmployeeList/>
        <AddButton/>
      </Box>
    </Grommet>
  );
}

export default App;
