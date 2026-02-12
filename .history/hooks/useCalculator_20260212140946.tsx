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
    const [prevNumber, setPrevNumber] = useState('');

    const lastOperation = useRef<Operator>(null);

    useEffect(() => {
        console.log(prevNumber);
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);


    useEffect(() => {
        if (lastOperation.current && number) {
            const subResult = calculateResult();
            setPrevNumber(`${subResult}`);
        } else {
            setPrevNumber(''); // Ensure prevNumber is set even if no operation was performed
        }
    }, [formula]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = null;
    }

    const toogleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.replace('-', '');
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('');
    }

    const buildNumber = (numberString: string) => {
        //* Verificar si ya existe un punto decimal
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //* Evaluar si es otro cero y hay un punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //* Evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //* Evitar 0000.0
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    }

    const setLastNumber = () => {
        // number.endsWith('.') ? setPrevNumber(number.slice(0, -1)) : setPrevNumber(number)

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }
        setPrevNumber(number);
        setNumber('');

    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const calculateResult = () => {
        const [firstNumber, operator, secondNumber] = formula.split(' ');

        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        if (isNaN(num2)) return num1;

        switch (operator) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                throw new Error(`Operator ${operator} not implemented`);
        }
    }

    return {

        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber,
        clean,
        toogleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateResult

    };

}