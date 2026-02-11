import { useRef, useState } from "react";


enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('');

    const [number, setnumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(null);

}