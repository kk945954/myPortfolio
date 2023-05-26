import React from "react";
import "../styles/Footer.css";
import ScrollScreens from "../utilities/scrollScreens";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className="scroll-container">
            <button
                className="btn-scroll"
                onClick={() => ScrollScreens.scrollHandler.scrollToHome()}
            >
                <FontAwesomeIcon icon={faArrowUp} bounce style={{color: "#ffffff", marginTop:  "7px", }} />
            </button>
        </div>
    );
}