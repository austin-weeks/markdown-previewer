import { QuestionMark, X } from "@phosphor-icons/react";
import "./InfoBtn.css"
import { useState } from "react";

function InfoBtn() {
    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <>
            {!infoOpen &&
            <div className="info-btn" onClick={() => setInfoOpen(true)}>
                <QuestionMark color="#151502" weight="bold" />
            </div> }
            {infoOpen &&
            <div className="info-panel">
                This app was built for the <a target="_blank" href="https://freeCodeCamp.org">freeCodeCamp</a> Front
                End Development Libraries Course. View more of my project on my <a href="https://austin-weeks.github.io">Portfolio</a>.
                    <div className="close-btn" onClick={() => setInfoOpen(false)}>
                    <X weight="bold" />
                </div>
            </div> }
        </>
    );
}

export default InfoBtn;