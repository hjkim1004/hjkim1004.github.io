import React, {useEffect, useState} from "react";

export interface ITypewriter {
    text: string
    delay?: number
}

const Typewriter = ({text, delay}: ITypewriter) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span className="typing">{currentText}</span>;
};

export default Typewriter;