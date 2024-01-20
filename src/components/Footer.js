import { useSelector } from "react-redux";
import { BOOK_MY_SHOW_LOGO_URL, COPYRIGHT_TEXT_1, COPYRIGHT_TEXT_2, COPYRIGHT_TEXT_3, FOOTER_KEYS, FOOTER_VALUES } from "../utils/constants";
import { FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white w-full">
            <FooterBody/>
            <FooterBottom/>
        </div>
    )
};

const FooterBody = () => {
    const location = useSelector((store) => store.user.location);

    return (
        <div>
            {FOOTER_KEYS.map((key, index) => {
                return <FooterHelper key={key} title={key + ((index < 2) ? location : '')} values={FOOTER_VALUES[index]}/>
            })}
        </div>
    )
}

const FooterHelper = ({ title, values }) => {
    return (
        <div className="flex flex-col pt-4 p-2 pl-32">
            <label className="font-semibold">{title}</label>
            <div className="flex space-x-1">
                {values.map((value, index) => {
                    return (<label className="text-sm" key={index}>{index > 0 ? " | " : ""}{value}</label>)
                })}
            </div> 
        </div>
    )
}

const FooterBottomDivider = () => {
    return (
        <div className="py-10">
            <div className="flex justify-center items-center">
                <div className="border-t border-gray-300 flex-grow mx-4"></div>
                <img
                    className="w-30 h-16 p-1 bg-black"
                    alt="logo"
                    src={BOOK_MY_SHOW_LOGO_URL}
                />
                <div className="border-t border-gray-300 flex-grow mx-4"></div>
            </div>
        </div>
    )
}

const SocialMediaIcons = () => {
    return (
        <div className="flex py-5 justify-center items-center">
            <div className="flex items-center w-auto space-x-2">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaFacebook/>
                </div>

                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaTwitter/>
                </div>

                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaInstagram/>
                </div>

                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaYoutube/>
                </div>

                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaPinterest/>
                </div>

                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    )
}

const TermsAndConditions = () => {
    return (
        <div className="flex flex-col justify-center items-center pb-24 pt-10">
            <label>{COPYRIGHT_TEXT_1}</label>
            <label>{COPYRIGHT_TEXT_2}</label>
            <label>{COPYRIGHT_TEXT_3}</label>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div>
            <FooterBottomDivider/>
            <SocialMediaIcons/>
            <TermsAndConditions/>
        </div>
    )
}

export default Footer;