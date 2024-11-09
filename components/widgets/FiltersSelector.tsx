"use client";

import { leadStore } from "@/store/store";
import { useEffect, useState } from "react";

const FiltersSelector = () => {
    const [filterOptions, setFilterOptions] = useState<"absent" | "present" | "unfiltered">(
        "unfiltered"
    );
    const { filterByPresence } = leadStore();

    const options: { action: "absent" | "present" | "unfiltered"; title: string }[] = [
        { action: "absent", title: "Отсутствующим" },
        { action: "present", title: "Присутствующим" },
        { action: "unfiltered", title: "Без фильтра" },
    ];

    useEffect(() => {
        filterByPresence(filterOptions);
    }, [filterOptions, filterByPresence]);

    function handleSelectors(action: "absent" | "present" | "unfiltered") {
        setFilterOptions(action);
        filterByPresence(action);
    }

    return (
        <div className='flex items-center gap-5 text-brown'>
            <h2 className='heading'>Фильтровать по:</h2>
            {options.map((option) => (
                <div
                    onClick={() => handleSelectors(option.action)}
                    className={`option_selector ${
                        filterOptions === option.action ? "selected" : undefined
                    }`}
                    key={option.title}>
                    {option.title}
                </div>
            ))}
        </div>
    );
};

export default FiltersSelector;
