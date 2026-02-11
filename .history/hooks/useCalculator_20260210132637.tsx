import { useEffect, useRef, useState } from "react";


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

    useEffect(() => {
        // Todo: Calcular subResultado
        setFormula(number);
    }, [number]);

    const buildNumber = (numberString: string) => {
        //* Verificar si ya existe un punto decimal

        if (number.includes('.') && numberString === '.') return;
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