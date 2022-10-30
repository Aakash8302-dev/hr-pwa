import { useEffect } from "react"
import { useRouter } from "next/router"
import {useSession} from 'next-auth/react'
import { Grid, Box } from "@mui/material"
import LoginForm from "../components/LoginForm"


const classes = {
  root:{
    backgroundColor: "",
    textAlign: "center",
    height: "100vh"
  },
  formWrap:{
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  }
}

export default function Home() {

  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(()=>{
      if(session){
        router.push('/home');
      }
  },[session])
 
  return (
    <Grid container sx={{...classes.root}}>
            <Grid item sm={12} sx={{...classes.formWrap}}>
                <Box>
                    <h2>Welcome to <br/>Forese Volunteer App</h2>
                    <LoginForm />
                </Box>
            </Grid>
    </Grid>
  )
}
