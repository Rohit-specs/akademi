"use client"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { COLORS } from "/data/Theme";

function ProgressCircle({ value }) {
    return (
        <div className="progress-circle">
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                strokeWidth={10}
                styles={buildStyles({
                    pathColor: COLORS.purple,
                    trailColor: COLORS.gray300,
                    textColor: COLORS.text,
                    textSize: "24px",
                    strokeLinecap: "round",
                    rotation: 0.5,
                })}
            />
        </div>
    );
}

export default ProgressCircle;