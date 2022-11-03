import { width } from "@mui/system";
// import Olho from "./images/olho.jpg"
import React from "react";
import Body from "../components/Body/Body";
import TvIcon from '@mui/icons-material/Tv';

const Home: React.FC = () => {
    return (     
        
        <Body>
        <div>
            {/* <img src={Olho} style={{width:"100px", height:"100px"}}/> */}
            <img src="./images/gato.jpg" style={{width:"100%", height:"200px"}}/>
            </div >
            <div>
                <TvIcon></TvIcon>
            </div>
        </Body>

    );    
};

export default Home;