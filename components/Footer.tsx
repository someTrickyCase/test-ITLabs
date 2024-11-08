import React from "react";
import FiltersSelector from "./widgets/FiltersSelector";

const Footer = () => {
    return (
        <footer className='footer'>
            <FiltersSelector />
            <p>Тестовое задание для ITLabs</p>
        </footer>
    );
};

export default Footer;
