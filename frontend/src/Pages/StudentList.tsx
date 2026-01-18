import React from 'react'
import { Typography, Box } from '@mui/material'

interface IStudentListProps {
  className: string;
}

const StudentList: React.FC<IStudentListProps>  = ({ className }) => {
  return (
    <Box sx={{width: "100vw", height: "100vh", overflowY: "auto"}}>
        <Box sx={{marginLeft: '32px', marginRight: '32px', marginTop: '32px'}}>
            <Typography variant='h3' component='h1' gutterBottom sx={{ ml: 0.5, overflow: "hidden", textOverflow: "ellipsis" }}>Klasse {className}</Typography>
            <Typography variant='subtitle1' sx={{ ml: 0.5 }}>Schüler:</Typography>
        </Box>
    </Box>
  );
};

export default StudentList;