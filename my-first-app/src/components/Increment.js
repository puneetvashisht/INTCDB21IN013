import { useState, useEffect } from 'react';
import useCounter from '../hooks/counter-hook';

export default function Increment() {
    const counter = useCounter();
    return <h2>{counter}</h2>;
};
