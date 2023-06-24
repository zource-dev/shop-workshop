import { useContext } from 'react';
import Counter from '@/components/contexts/Counter';

export default function Button() {
    const counter = useContext(Counter);

    const handleClick = function() {
      counter.setValue(Math.random());
    };

    return <button onClick={handleClick}>{counter.value}</button>;
}
