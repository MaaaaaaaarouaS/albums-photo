import React from 'react'
import { Grid,Paper,TextField, Button, Typography,Link } from '@material-ui/core'
const Login=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#e1b11e',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const inputstyle={marginBottom:'10px'}
    return(
        <Grid> 
            <Paper className="grid_form" elevation={0} >
                <Grid align='center'>
                    <span className="dot"></span>
                    <h2>Create your account</h2>
                </Grid>
                <TextField style={inputstyle} label="Email" variant="outlined" fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Username' variant="outlined" fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Password' variant="outlined" type='password' fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Confirm password' variant="outlined" type='password' fullWidth size="small"required/>
                <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth>Create Account</Button>
                </Grid>
                <Typography style={{fontSize:'11px'}} align='center'> Already have an account ? 
                     <Link style={{color:'#e1b11e',paddingLeft:'10px'}} href="#" >
                         Log in! 
                     </Link>
                </Typography>
                <Grid align='center'>
                    <p style={{color:'#5b5b5b',fontSize:'10px',maxWidth:'85%'}}>By creating an account,you agree to our terms and Conditions.We'll never post or share anything wiyhout your permission</p>
                </Grid>
            </Paper>
            <Grid className="grid" align='center'>
                <span className="logo"><p style={{marginTop:'50px'}}>Logo</p></span>
            </Grid>  
        </Grid>
        
    )
}
export default Login