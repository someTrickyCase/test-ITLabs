"use client";

import { leadStore } from "@/store/store";
import { cn } from "@/utils/cn";

const Input = ({ ...props }) => {
    const { placeholder, type, name, def, className } = props;

    const { filterByName, filterByCompany } = leadStore();

    function handleSearch() {
        const value = (document.querySelector(`.${className}`) as HTMLInputElement).value;
        if (className === "name-search") filterByName(value);
        if (className === "company-search") filterByCompany(value);
    }

    return (
        <input
            onChange={handleSearch}
            defaultValue={def}
            name={name}
            type={type}
            placeholder={placeholder}
            className={cn("search_input", className)}
        />
    );
};

export default Input;
