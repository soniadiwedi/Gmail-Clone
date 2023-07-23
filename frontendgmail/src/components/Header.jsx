
import * as React from 'react';
import {AppBar,Box,InputBase,Toolbar,styled} from '@mui/material';
import {gmailLogo} from '../constants/constants'
import {Menu as MenuIcon,Padding,Search,Tune} from '@mui/icons-material'

const StyledAppBar=styled(AppBar)({
    background: '#f5f5f5',
    boxShadow:'none'
})

const SearchWrapper=styled(Box)({
    background:"#EAF1FB",
    marginLeft:80,
    borderRadius:20,
    minWidth:650,
    maxWidth:730,
    height:48,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding:'0 30px',
})
export const Header = () => {
  return (
   
    
      <StyledAppBar position="static">
        <Toolbar>
    
            <MenuIcon color='action'/>
            <img src={gmailLogo} style={{width:"110px",marginLeft:"15px"}} alt="logo"/>
            <SearchWrapper>
            <Search color='action'/>
            <InputBase />
            <Tune color='action'/>
            </SearchWrapper>
           
        </Toolbar>
      </StyledAppBar>
 
  


  
  )
}
