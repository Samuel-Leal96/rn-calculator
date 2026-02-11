import { useEffect, useRef, useState } from "react";


enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(null);

    useEffect(() => {
        // Todo: Calcular subResultado
        setFormula(number);
    }, [number]);

    const buildNumber = (numberString: string) => {
        //* Verificar si ya existe un punto decimal

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

        }

        setNumber(number + numberString);
    }

    return {

        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber
    };

}