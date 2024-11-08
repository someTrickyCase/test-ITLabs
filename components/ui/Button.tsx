import { cn } from "@/utils/cn";

const Button = ({
    className,
    children,
    onClick,
}: {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <button onClick={onClick} className={cn("button", className)}>
            {children}
        </button>
    );
};

export default Button;
