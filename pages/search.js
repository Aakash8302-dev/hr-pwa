import { useEffect, useState } from "react"
import {Box} from "@mui/material"
import SearchBar from "../components/SearchBar"
import BookData from "../utils/Data.json"
import Router from "next/router";
import { useSession } from "next-auth/react";
import axios from 'axios'

const classes = {
    root:{
        height: "100vh",
        display: "grid",
        justifyContent: "center",
        padding: "2rem"
    }
}

export default function Search (){

    const {data: session, status} = useSession();

    const [students, setStudents] = useState();

    useEffect(()=> {
        
        async function getAllStudents(){
            const {data} = await axios.get("/api/student");
            if(data){
                setStudents(data);
            }
        }

        if(status === "unauthenticated"){
            Router.push("/");
        }else{
            getAllStudents();
        }   

    },[status])

    return(
        <Box sx={{...classes.root}} >
            <SearchBar placeholder={"Enter Student ID"} data={students} />
        </Box>
    )
}