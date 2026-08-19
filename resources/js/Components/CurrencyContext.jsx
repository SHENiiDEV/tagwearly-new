import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const currencies = [
    { code: 'EUR', symbol: '€', flag: '🇪🇺', rate: 1.0, label: 'EUR (€)' },
    { code: 'USD', symbol: '$', flag: '🇺🇸', rate: 1.08, label: 'USD ($)' },
    { code: 'GBP', symbol: '£', flag: '🇬🇧', rate: 0.85, label: 'GBP (£)' },
];

export function CurrencyProvider({ children }) {
    const [currency, setCurrency] = useState('EUR');

    useEffect(() => {
        const saved = localStorage.getItem('tagwearly_currency');
        if (saved && currencies.some((c) => c.code === saved)) {
            setCurrency(saved);
        }
    }, []);

    const changeCurrency = (code) => {
        setCurrency(code);
        localStorage.setItem('tagwearly_currency', code);
    };

    const formatPrice = (priceInEur) => {
        const cur = currencies.find((c) => c.code === currency) || currencies[0];
        const converted = priceInEur * cur.rate;
        return `${cur.symbol}${Math.round(converted).toLocaleString()}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, changeCurrency, formatPrice, currencies }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        return {
            currency: 'EUR',
            changeCurrency: () => {},
            formatPrice: (val) => `€${val}`,
            currencies,
        };
    }
    return context;
}
