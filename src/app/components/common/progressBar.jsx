import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({
    value,
    title,
    type = "bar",
    postfix,
    startAngle = 90,
    color = "#84cc16",
    height = 12
}) => {
    const isCircle = type.toLocaleLowerCase().includes("circle");
    const w = 100;
    let h = 100;
    const cfg = {};
    let R = 0;
    const val = isFinite(value) && value > 0 ? (value <= 100 ? value : 100) : 0;

    if (isCircle) {
        R = w * 0.42;
        const shift = w * 0.08;

        cfg.startAngleRad = (startAngle * Math.PI) / 180;
        cfg.startPoint = `M${R * (1 + Math.cos(cfg.startAngleRad)) + shift},${
            R * (1 - Math.sin(cfg.startAngleRad)) + shift
        }`;
        cfg.endAngle = (360 * val) / 100 - 0.01;
        cfg.endAngleRad = cfg.startAngleRad + (cfg.endAngle * Math.PI) / 180;
        cfg.endPoint = `${R * (1 - Math.cos(cfg.endAngleRad)) + shift},${
            R * (1 - Math.sin(cfg.endAngleRad)) + shift
        }`;
        cfg.flags = `${cfg.endAngle > 180 ? 1 : 0},1`;
    } else {
        h = 20;
        cfg.widthFull = w;
        cfg.width = (w * val) / 100;
        cfg.height = h * 0.6;
    }
    return (
        <div className="relative w-auto h-auto">
            <p
                className={`top-0 left-0 font-sans px-1 font-semibold text-xl z-10`}
            >
                {title}
            </p>
            {!isCircle ? (
                <div
                    className={`relative  w-[${height}px] h-[${cfg.height}] p-1`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={`0 0 ${w} ${cfg.height}`}
                        preserveAspectRatio="xMaxYMid meet"
                    >
                        <defs>
                            <style>
                                {`
                .cls-11{
                    fill: ${color};
                    stroke: ${color};
                    stroke-width: 0px;
                }
                .cls-12{
                    fill: #d4d4d8;
                    stroke: #d4d4d8;
                    stroke-width: 0px;
                }
                `}
                            </style>
                        </defs>
                        <g id="Layer_3" data-name="Layer 4">
                            <rect
                                className="cls-12"
                                width={cfg.widthFull}
                                height={cfg.height}
                                rx={2}
                            />
                            <g id="Layer_4" data-name="Layer 3">
                                <rect
                                    className="cls-11"
                                    width={cfg.width}
                                    height={cfg.height}
                                    rx={2}
                                />
                            </g>
                        </g>
                    </svg>
                    <p
                        className={`absolute top-[3%] left-[45%]  font-sans font-semibold text-xl z-10`}
                    >
                        {val} {postfix}
                    </p>
                </div>
            ) : (
                <div className="relative w-auto h-auto p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={`0 0 ${w} ${h}`}
                        preserveAspectRatio="xMaxYMax meet"
                    >
                        <defs>
                            <style>
                                {`.cls-1{
                    fill: transparent;
                    stroke: ${color};
                    stroke-width: 8px;
                    stroke-linecap: round;
                }`}
                            </style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path
                                    className="cls-1"
                                    // d="M50,0 A50,50 50 0,1 0,100"
                                    d={`${cfg.startPoint} A${R},${R} 0 ${cfg.flags} ${cfg.endPoint}`}
                                />
                            </g>
                        </g>
                    </svg>
                    <p
                        className={`absolute top-[38%] left-[35%] font-sans text-center font-semibold text-2xl z-10`}
                    >
                        {val} {postfix}
                    </p>
                </div>
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    postfix: PropTypes.string,
    startAngle: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.number
};

export default ProgressBar;
