const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    background: "bg-gradient-to-r from-black to-stone-800",

    heading2:
        "font-poppins font-semibold xs:text-[48px] text-[40px] text-zink-100 xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3:
        "font-poppins font-semibold xs:text-[32px] text-[24px] text-amber-200 xs:leading-[46px] leading-[36px] w-full",
    paragraph1:
        "font-poppins font-normal text-slate-100 text-[18px] leading-[30.8px]",
    paragraph2:
        "font-poppins font-normal text-slate-200 text-[16px] leading-[24px]",

    flexCenterRow: "flex flex-row justify-center items-center",
    flexCenterCol: "flex flex-col justify-center items-center",
    flexStartRow: "flex flex-row justify-start items-start",
    flexStartCol: "flex flex-col justify-start items-start",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-12 px-4",
    paddingY: "sm:py-12 py-4",
    paddingY_sm: "sm:py-6 py-2",
    paddingY_top: "sm:pt-4 pt-2",
    padding: "sm:px-12 px-4 sm:py-9 py-3",
    padding_sm: "sm:px-4 px-2 sm:py-4 py-2",

    marginX: "sm:mx-12 mx-4",
    marginY: "sm:my-12 my-4"
};

export const layout = {
    section: `flex flex-col ${styles.paddingY_sm}`,
    sectionReverse: `flex flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`
};

export const sliderColor = [
    "#247881",
    "#400D51",
    "#541690",
    "#D800A6",
    "#31E1F7",
    "#43919B",
    "#247881",
    "#30AADD",
    "#FF8D29",
    "#FFCD38",
    "#FF7777",
    "#FF4949"
];

export default styles;
