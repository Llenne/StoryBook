import React, { HTMLAttributes, ReactNode } from 'react';
import './Header.css'

export interface Props extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    variant: 'narrow' | 'wide';
    sticky: boolean;
}

export const Header = ({children, sticky, variant, ...props}: Props) => {
    return (
        <div className='header' style={{padding: '15px'}}>
            <div className='header-container' {...props} style={{maxWidth: variant === 'narrow' ? '1400px' : '100%', margin: 'auto'}}>
                {children}
            </div>
        </div>
    )
}