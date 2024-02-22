import { useState } from "react";

export const useConditionalLogic = (label:string) => {
    const [isOption, setisOption] = useState(false);
    const [isLogic, setisLogic] = useState(false);
    const [selectedCondition, setselectedCondition] = useState("");
    const [value, setValue] = useState('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedCondition(e.target.value);
        console.log(selectedCondition);
        
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        isOption,
        isLogic,
        selectedCondition,
        value,
        setisOption,
        setisLogic,
        handleOptionChange,
        handleValueChange,
    };
};