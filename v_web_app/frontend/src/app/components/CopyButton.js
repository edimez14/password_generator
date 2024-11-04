import { Button } from "@nextui-org/react";
import { FiCopy } from 'react-icons/fi';

export const CopyButton = ({ textToCopy }) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            // console.log("Text copied to clipboard:", textToCopy);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <Button
            isIconOnly
            variant="light"
            color="primary"
            aria-label="Copy to clipboard"
            className="bg-transparent text-blue-500"
            onClick={handleCopy}
        >
            <FiCopy size={32} />
        </Button>
    );
};
