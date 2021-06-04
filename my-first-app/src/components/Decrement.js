import { useState, useEffect } from 'react';
import useCounter from '../hooks/counter-hook';

export default function Decrement() {
    const counter = useCounter(false);
    return <h2>{counter}</h2>;
};
