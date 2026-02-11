

export const useCalculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operation, setOperation] = useState('');