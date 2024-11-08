"use client";

import { leadStore } from "@/store/store";

const VisitorsCounter = () => {
    let present = 0;
    let absent = 0;
    const { leads } = leadStore();

    leads.map((lead) => {
        if (lead.presence === "false") absent += 1;
        if (lead.presence === "true") present += 1;
    });

    return (
        <div className='flex flex-col items-end heading'>
            <h2>Посетители</h2>
            <p>
                <span className='text-secondary-green'>{present}</span>/
                <span className='text-orange'>{absent}</span>
            </p>
        </div>
    );
};

export default VisitorsCounter;
