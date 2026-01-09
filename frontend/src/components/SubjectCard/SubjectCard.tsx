import React from 'react';
import { Stack, Card, CardContent, Typography, Button, Badge } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import type { ISubjectCardProps } from '../../Interfaces/ISubjectCardProps';

const SubjectCard: React.FC<ISubjectCardProps>  = ({ name, badgeNumber }) => {
  return (
        <Badge badgeContent={badgeNumber} color='error' sx={{display: "block"}}>
          <Card sx={{borderRadius: 4}}>
            <CardContent>
              <Stack spacing={3}>
                <Typography variant="h4" component="h2" sx={{overflow: "hidden", textOverflow: "ellipsis"}}>{name}</Typography>
                <Button variant="contained" fullWidth endIcon={<MeetingRoomIcon />}>
                  <Typography variant="button">Ins Klassenzimmer</Typography>
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Badge>
  );
};

export default SubjectCard;