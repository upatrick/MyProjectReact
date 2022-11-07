import { width } from "@mui/system";
import Olho from "../images/gato.jpg";
import React from "react";
import Body from "../components/Body/Body";
import TvIcon from "@mui/icons-material/Tv";

const Home: React.FC = () => {
    return (
        <Body>
            <div>
                <img
                    src={Olho}
                    style={{
                        width: "100vh",
                        height: "200px",
                        border: "7px, red",
                    }}
                />
            </div>
            <div>
                <TvIcon></TvIcon>
            </div>
        </Body>
    );
};

export default Home;
