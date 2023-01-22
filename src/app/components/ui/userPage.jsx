import React from "react";
import PropTypes from "prop-types";
import styles, { layout, sliderColor } from "../../../style";
import ProgressBar from "../common/progressBar";
import Badge from "../common/Badge";

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
                <div>
                    <h2 className={`${styles.heading3} p-2`}>Анкета</h2>
                    <hr className="ring-orange-400" />
                    <div
                        className={`${styles.flexStartRow} ${styles.paddingY}`}
                    >
                        <div
                            className={`flex-col rounded-lg  justify-center w-72 shadow-sm`}
                        >
                            {/* <p className="text-xs font-body px-4 pb-4 text-slate-400"> */}
                            <p className={`${styles.paragraph2} p-1`}>
                                Фотография:{" "}
                            </p>
                            <div className="">
                                <img
                                    src={"../" + photoUrl}
                                    className=" rounded-lg"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div
                            className={`flex-col rounded-t-lg  justify-center w-72 shadow-sm`}
                        >
                            <div className={`justify-start mb-1`}>
                                <p className={`${styles.paragraph2} p-1`}>
                                    Имя: {name}
                                </p>
                                <div className={`${styles.paragraph2} p-1`}>
                                    Возраст: {age}
                                </div>
                                <div className={`${styles.paragraph2} p-1`}>
                                    О себе: {aboutMe}
                                </div>
                                <div className={`${styles.paragraph2} p-1`}>
                                    <div
                                        className={`${styles.flexStart} flex-row gap-2 p-2`}
                                    >
                                        <p>Социальные сети: </p>
                                        {socials.map((social, i) => (
                                            <div
                                                className="max-w-[40px]"
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
                                <div className={`${styles.paragraph2} p-1`}>
                                    <p>Баджи/значки: </p>
                                    <div
                                        className={`${styles.flexStart} flex-wrap gap-2 p-2`}
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
                {/* // **************************** */}
                <div>
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
                {/* // **************************** */}
                <div>
                    <h2 className={`${styles.heading3} p-2`}>Навыки</h2>
                    <hr className="ring-orange-400" />
                    <div className={`${styles.flexStartCol} p-2`}>
                        <div className={`${styles.flexStart} flex-wrap`}>
                            {skills.map((skill, ind) => (
                                <div
                                    key={`${skill}_${ind}`}
                                    className="w-36 h-46"
                                >
                                    <ProgressBar
                                        value={(Math.random() * 100).toFixed(0)}
                                        title={skill}
                                        type={"circle"} // bar, circle
                                        postfix={" %"}
                                        startAngle={90}
                                        // height = {12}
                                        color={
                                            sliderColor.length - 1 < ind
                                                ? sliderColor[
                                                      ind %
                                                          (sliderColor.length -
                                                              1)
                                                  ]
                                                : sliderColor[ind]
                                        }
                                    />
                                </div>
                            ))}
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
