import { LinearProgress } from '@mui/material';


function ProgressBar({color,progress}){
    
    return(
        <LinearProgress color = {color} variant = 'determinate' value = {progress}/>
    )
}

export default ProgressBar