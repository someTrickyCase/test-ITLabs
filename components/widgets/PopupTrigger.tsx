"use client";

import Popup from "@/components/Popup";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

const PopupTrigger = () => {
    const [isShown, setIsShown] = useState(false);

    function closePopup() {
        setIsShown(false);
    }

    useEffect(() => {
        const trigger = document.querySelector(".popup-trigger");
        trigger?.addEventListener("click", () => {
            setIsShown(true);
        });
    });

    return (
        <>
            <Button className='popup-trigger'>Добавить</Button>
            {isShown && <Popup closePopup={closePopup} />}
        </>
    );
};

export default PopupTrigger;
