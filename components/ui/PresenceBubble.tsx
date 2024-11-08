const PresenceBubble = ({ condition }: { condition: "true" | "false" }) => {
    return (
        <div
            className={`presence_bubble ${
                condition === "true" ? "!bg-primary-green" : "!bg-orange"
            }`}></div>
    );
};

export default PresenceBubble;
