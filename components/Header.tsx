import Image from "next/image";
import Input from "./ui/Input";
import VisitorsCounter from "@/components/widgets/VisitorsCounter";
import PopupTrigger from "@/components/widgets/PopupTrigger";

const Header = () => {
    return (
        <header className='header'>
            <div className='flex items-center justify-between'>
                <div className='flex items-end gap-8'>
                    <Image
                        className='logo_img'
                        src={"/logo.png"}
                        alt='logo'
                        width={188}
                        height={90}
                    />
                    <Input className='name-search' placeholder='Поиск по имени' type='text' />
                    <Input className='company-search' placeholder='Поиск по компании' type='text' />
                    <PopupTrigger />
                </div>
                <VisitorsCounter />
            </div>
        </header>
    );
};

export default Header;
