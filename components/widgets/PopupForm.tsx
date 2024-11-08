import { useEffect, useState } from "react";
import Input from "../ui/Input";
import { LeadType } from "@/types/types";

const PopupForm = ({ lead }: { lead?: LeadType }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (lead) {
            setIsChecked(lead.presence === "false" ? false : true);
        }
    }, [lead]);

    function handleCheck() {
        setIsChecked(!isChecked);
    }

    return (
        <form className='popup_form sub-heading flex justify-center items-center flex-col gap-8 w-full'>
            <label className='flex items-center justify-start'>
                <p className='w-[230px] border-r-2 border-gray/[0.2]'>ФИО</p>
                <Input
                    def={lead?.billing}
                    placeholder='Ваше Имя'
                    type='text'
                    className='input_billing'
                />
            </label>

            <label className='flex justify-start items-center'>
                <p className='w-[230px] border-r-2 border-gray/[0.2]'>Компания</p>
                <Input
                    def={lead?.company}
                    placeholder='Название Вашей Компании'
                    type='text'
                    className='input_company'
                />
            </label>

            <label className='flex justify-start items-center'>
                <p className='w-[230px] border-r-2 border-gray/[0.2]'>Группа</p>
                <select defaultValue={lead?.group} className='select_group input_select'>
                    <option className='selector' value='unselected'>
                        Выбрать
                    </option>
                    <option className='selector' value='passerby'>
                        Прохожий
                    </option>
                    <option className='selector' value='client'>
                        Клиент
                    </option>
                    <option className='selector' value='partner'>
                        Партнер
                    </option>
                </select>
            </label>

            <label className='flex items-center justify-start'>
                <p className='w-[230px] border-r-2 border-gray/[0.2]'>Присутствие</p>
                <div className='w-[18rem] h-8 flex items-center px-4 justify-start'>
                    <input
                        onChange={handleCheck}
                        type='checkbox'
                        checked={isChecked}
                        className={`!h-6 !w-6 input_checkbox ${isChecked}`}
                    />
                </div>
            </label>
        </form>
    );
};

export default PopupForm;
