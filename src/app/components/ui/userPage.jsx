import React from "react";
import PropTypes from "prop-types";
import styles, { layout, sliderColor } from "../../../style";
import ProgressBar from "../common/progressBar";
import { isHttp } from "../../utils/checkFunc";
import Badge from "../common/Badge";

const colorPicker = (i) => {
    return sliderColor.length - 1 < i
        ? sliderColor[i % (sliderColor.length - 1)]
        : sliderColor[i];
};

const UserPage = ({
    name,
    age,
    aboutMe,
    photoUrl,
    tasks,
    skills,
    socials,
    badges
}) => {
    return (
        <>
            <section
                className={`${layout.section} ${styles.marginX} flex flex-col`}
            >
                <div className={`${styles.paddingY_top}`}>
                    <h2 className={`${styles.heading3} p-2`}>{name}</h2>
                    <hr className="ring-orange-400" />
                    <div
                        className={`${styles.flexStartRow} ${styles.padding_sm} gap-2`}
                    >
                        <div
                            className={`flex-col grow-0 rounded-lg  justify-center w-72 shadow-sm`}
                        >
                            <div>
                                <img
                                    src={
                                        isHttp(photoUrl)
                                            ? photoUrl
                                            : "../" + photoUrl
                                    }
                                    className="rounded-lg"
                                    alt="photo"
                                />
                            </div>
                            <div className="my-4 flex justify-center">
                                {socials.map((social, i) => (
                                    <div
                                        className="max-w-[40px] hover:-translate-y-1 transition-all"
                                        key={`${social.name}_${i}`}
                                    >
                                        <a
                                            href={social.link}
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={`../${social.iconUrl}`}
                                                alt={social.name}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`flex-col grow rounded-t-lg  justify-center w-72 shadow-sm`}
                        >
                            <div className={`justify-start mb-1`}>
                                <div className={`${styles.paragraph2} p-1`}>
                                    <span className="underline pr-2">
                                        Возраст:
                                    </span>
                                    {age}
                                </div>
                                <div className={`${styles.paragraph2} p-1`}>
                                    <span className="underline pr-2">
                                        О себе:
                                    </span>
                                    {aboutMe}
                                </div>
                                <div className={`${styles.paragraph2} p-1`}>
                                    <div
                                        className={`${styles.flexStartCol} lg:flex-row`}
                                    >
                                        {badges.map((badge, i) => (
                                            <Badge
                                                key={`$badge}_${i}`}
                                                {...badge}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.paddingY_top}`}>
                    <h2 className={`${styles.heading3} p-2`}>
                        Задачи в проекте
                    </h2>
                    <hr className="ring-orange-400" />
                    <div className={`${styles.flexStartCol}`}>
                        {tasks.map((task, i) => (
                            <div
                                className={`${styles.paragraph1} p-1`}
                                key={`${task}_${i}`}
                            >
                                {task}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.paddingY_top}`}>
                    <h2 className={`${styles.heading3} p-2`}>Навыки</h2>
                    <hr className="ring-orange-400" />
                    <div className={`${styles.flexStartCol} p-2`}>
                        <div
                            className={`${styles.flexStart} ${styles.flexStartCol} flex-wrap`}
                        >
                            <div className={`${styles.flexStartCol}`}>
                                {skills
                                    .slice(0, (skills.length / 2).toFixed(0))
                                    .map((skill, ind, arr) => {
                                        const _color = colorPicker(10 - ind);
                                        return (
                                            <div key={`${skill}_bar_${ind}`}>
                                                <div className="w-[500px] h-46">
                                                    <ProgressBar
                                                        value={(
                                                            Math.random() * 100
                                                        ).toFixed(0)}
                                                        title={skill}
                                                        type={"bar"} // bar, circle
                                                        postfix={" %"}
                                                        startAngle={90}
                                                        height={5}
                                                        color={`${_color}`}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className={`${styles.flexStartRow}`}>
                                {skills
                                    .slice(-(skills.length / 2).toFixed(0))
                                    .map((skill, ind, arr) => {
                                        const _color = colorPicker(ind);
                                        return (
                                            <div key={`${skill}_circle_${ind}`}>
                                                <div className="w-44 h-50">
                                                    <ProgressBar
                                                        value={(
                                                            Math.random() * 100
                                                        ).toFixed(0)}
                                                        title={skill}
                                                        type={"circle"} // bar, circle
                                                        postfix={" %"}
                                                        startAngle={90}
                                                        color={`${_color}`}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

UserPage.propTypes = {
    name: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    aboutMe: PropTypes.string,
    photoUrl: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    socials: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ]),
    badges: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ])
};

export default UserPage;
