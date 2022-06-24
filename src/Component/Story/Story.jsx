import React from "react";
// import  {makeStyles } from "@mui/material";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
// import { Container } from "react-grid";
import './Story.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

class Story extends React.Component {
    // const classes = useStyles();
    render(){
        return(
            <article className=" mw8 center">
                <div className="top">
                <Stack direction = "row" spacing={2} >
                    <Avatar alt="avatar" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" sx={{ width: 70, height: 70 }} />
                    <Avatar alt="avatar" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"  sx={{ width: 70, height: 70 }}/>
                    <Avatar alt="avatar" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" sx={{ width: 70, height: 70 }} />
                </Stack>
                  </div>
                  </article>
          
        );
    }
    
}

export default Story;