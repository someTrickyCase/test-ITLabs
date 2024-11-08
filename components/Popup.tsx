import PopupForm from "./widgets/PopupForm";
import Button from "./ui/Button";
import { leadStore } from "@/store/store";
import { getStoreIndex } from "@/utils/helpers";
import { LeadType } from "@/types/types";
import { useEffect } from "react";

const Popup = ({ closePopup, lead }: { closePopup: () => void; lead?: LeadType }) => {
    const { addLead, changeLead, deleteLead } = leadStore();

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;
            closePopup();
        });
    });

    function addLeadRow() {
        const id = getStoreIndex();
        const billing = (document?.querySelector(".input_billing") as HTMLInputElement)?.value;
        const company = (document?.querySelector(".input_company") as HTMLInputElement)?.value;
        const group = (document?.querySelector(".input_select") as HTMLInputElement)?.value;
        const presence = (document?.querySelector(".input_checkbox") as HTMLInputElement)
            ?.classList[3] as "true" | "false";

        addLead({ id, billing, company, group, presence });
        closePopup();
    }

    function changeLeadRow(id: number | undefined) {
        const billing = (document?.querySelector(".input_billing") as HTMLInputElement)?.value;
        const company = (document?.querySelector(".input_company") as HTMLInputElement)?.value;
        const group = (document?.querySelector(".input_select") as HTMLInputElement)?.value;
        const presence = (document?.querySelector(".input_checkbox") as HTMLInputElement)
            ?.classList[3] as "true" | "false";

        changeLead({ billing, company, group, presence, id });
        closePopup();
    }

    function deleteLeadRow(lead: LeadType) {
        deleteLead(lead);
        closePopup();
    }

    return (
        <div className='popup'>
            <div className='w-[800px] h-[500px] z-10 bg-white rounded-3xl relative flex items-center justify-center flex-col'>
                <button onClick={closePopup} className='absolute right-4 top-4'>
                    <svg
                        width='46'
                        height='46'
                        viewBox='0 0 46 46'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M23 0C18.451 0 14.0042 1.34893 10.2219 3.8762C6.43956 6.40347 3.4916 9.99558 1.75078 14.1983C0.00996558 18.401 -0.445511 23.0255 0.441949 27.4871C1.32941 31.9486 3.51995 36.0468 6.73655 39.2634C9.95316 42.4801 14.0514 44.6706 18.5129 45.5581C22.9745 46.4455 27.599 45.99 31.8017 44.2492C36.0044 42.5084 39.5965 39.5604 42.1238 35.7781C44.6511 31.9958 46 27.549 46 23C46 19.9796 45.4051 16.9888 44.2492 14.1983C43.0934 11.4078 41.3992 8.87229 39.2635 6.73654C37.1277 4.6008 34.5922 2.90663 31.8017 1.75077C29.0112 0.594913 26.0204 0 23 0ZM28.8267 31.326L23 25.4993L17.1733 31.326C17.0092 31.4901 16.8144 31.6203 16.6 31.7091C16.3856 31.7979 16.1558 31.8436 15.9237 31.8436C15.6916 31.8436 15.4618 31.7979 15.2474 31.7091C15.0329 31.6203 14.8381 31.4901 14.674 31.326C14.5099 31.1619 14.3797 30.9671 14.2909 30.7526C14.2021 30.5382 14.1564 30.3084 14.1564 30.0763C14.1564 29.8442 14.2021 29.6144 14.2909 29.4C14.3797 29.1856 14.5099 28.9908 14.674 28.8267L20.5007 23L14.674 17.1733C14.3426 16.8419 14.1564 16.3924 14.1564 15.9237C14.1564 15.4549 14.3426 15.0054 14.674 14.674C15.0054 14.3426 15.455 14.1564 15.9237 14.1564C16.3924 14.1564 16.8419 14.3426 17.1733 14.674L23 20.5007L28.8267 14.674C28.9908 14.5099 29.1856 14.3797 29.4 14.2909C29.6144 14.2021 29.8443 14.1564 30.0763 14.1564C30.3084 14.1564 30.5382 14.2021 30.7527 14.2909C30.9671 14.3797 31.1619 14.5099 31.326 14.674C31.4901 14.8381 31.6203 15.0329 31.7091 15.2473C31.7979 15.4618 31.8436 15.6916 31.8436 15.9237C31.8436 16.1557 31.7979 16.3856 31.7091 16.6C31.6203 16.8144 31.4901 17.0092 31.326 17.1733L25.4993 23L31.326 28.8267C31.6554 29.1592 31.8402 29.6083 31.8402 30.0763C31.8402 30.5444 31.6554 30.9935 31.326 31.326C31.1628 31.4917 30.9683 31.6233 30.7537 31.7131C30.5392 31.8029 30.3089 31.8491 30.0763 31.8491C29.8438 31.8491 29.6135 31.8029 29.399 31.7131C29.1844 31.6233 28.9899 31.4917 28.8267 31.326Z'
                            fill='#666666'
                        />
                    </svg>
                </button>
                <PopupForm lead={lead} />
                <div className='flex items-center justify-between mt-[4rem] w-full px-[100px]'>
                    <Button onClick={lead ? () => changeLeadRow(lead.id) : addLeadRow}>
                        {lead ? "Изменить" : "Добавить"}
                    </Button>
                    <Button
                        onClick={lead ? () => deleteLeadRow(lead) : closePopup}
                        className='!bg-gray hover:!bg-placeholder-gray'>
                        {lead ? "Удалить" : "Закрыть"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
