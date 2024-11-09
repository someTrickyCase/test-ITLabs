"use client";

import { useEffect, useState } from "react";
import { leadStore } from "@/store/store";
import { LeadType } from "@/types/types";
import PresenceBubble from "./ui/PresenceBubble";
import Popup from "./Popup";

const LeadTable = () => {
    const [popup, setPopup] = useState<{ condition: boolean; lead?: LeadType }>({
        condition: false,
    });
    const [state, setState] = useState<LeadType[]>([]);
    const { crossfiltered } = leadStore();

    useEffect(() => {
        setState(crossfiltered);
    }, [crossfiltered]);

    function generateGroupText(identifier: string) {
        switch (identifier) {
            case "passerby":
                return "Прохожий";
            case "partner":
                return "Партнер";
            case "client":
                return "Клиент";
            case "unselected":
                return "Не указано";
        }
    }

    function handleRowClick(item: LeadType) {
        setPopup({ condition: true, lead: item });
    }

    function closePopup() {
        setPopup({ condition: false });
    }

    return (
        <>
            <table className='lead_table'>
                <thead className='border-b-[2px] border-gray/[0.2] mb-2 text-brown'>
                    <tr className='table_row !h-10 !text-lg !font-[600]'>
                        {["Номер", "ФИО", "Компания", "Группа", "Присутствие"].map(
                            (item: string) => (
                                <th className='table_cell' key={JSON.stringify(item)}>
                                    {item}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody className='overflow-y-scroll h-[67vh] no-scrollbar'>
                    {state.map((item: LeadType) => (
                        <tr
                            onClick={() => handleRowClick(item)}
                            key={item.id}
                            className='table_row !mt-2'>
                            <td className='table_cell'>{item.id}</td>
                            <td className='table_cell'>{item.billing}</td>
                            <td className='table_cell'>{item.company}</td>
                            <td className='table_cell'>{generateGroupText(item.group)}</td>
                            <td className='table_cell !justify-center'>
                                <PresenceBubble condition={item.presence} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {popup.condition && <Popup closePopup={closePopup} lead={popup.lead} />}
        </>
    );
};

export default LeadTable;
