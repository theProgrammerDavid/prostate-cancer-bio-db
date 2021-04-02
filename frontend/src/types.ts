import type { ReactNode } from 'react';

export interface CounterState {
    value: number;
    currentPage: String;
    email: String;
}

export interface PasswordFieldProps {
    onChangeHandler: (e: string) => void;
    pass?: string;
    label: string;
    placeholder: string;
    fullWidth?: boolean;
    startAdornment?: ReactNode;

};


export interface CardInterface {
    imagePath: string;
    title: string;
    altTitle: string;
    caption: string;
}