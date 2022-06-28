import React, { HTMLAttributes, ReactNode } from 'react';
import './Footer.css'

export interface Props extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    subChildren: ReactNode;
    variant: 'narrow' | 'wide';
}

export const Footer = ({children, variant, ...props}: Props) => {
    return (
        <div className='footer' style={{padding: '15px 15px 0px'}}>
            <div {...props} style={{maxWidth: variant === 'narrow' ? '1400px' : '100%', margin: 'auto'}}>
                {children}
            </div>
        </div>
    )
}