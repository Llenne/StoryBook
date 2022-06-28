import React, { HTMLAttributes, ReactNode } from 'react';
import './Button.css'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary' | 'secondary';
    withIcon: boolean;
}

export const Button = ({children, variant, withIcon, ...props}: Props) => {
    return (
         withIcon ? (
            <button className='btn' {...props} style={{background: variant === 'primary' ? 'linear-gradient(94.24deg, #F7971C -2.62%, #F76C1C 109.35%), #F7971C' : 'linear-gradient(100.98deg, #37CFF9 -9.19%, #249AFF 107.62%), linear-gradient(94.24deg, #F7971C -2.62%, #F76C1C 109.35%), #F7971C'}}>
                {children}
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill='#ffffff' d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                </svg>
            </button>
         ) : (
            <button className='btn' {...props} style={{background: variant === 'primary' ? 'linear-gradient(94.24deg, #F7971C -2.62%, #F76C1C 109.35%), #F7971C' : 'linear-gradient(100.98deg, #37CFF9 -9.19%, #249AFF 107.62%), linear-gradient(94.24deg, #F7971C -2.62%, #F76C1C 109.35%), #F7971C'}}>
                {children}
            </button>
        )
    )
}