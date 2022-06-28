import React, { HTMLAttributes, ReactNode } from 'react';
import './Avatar.css'

export interface Props extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    variant: 'small' | 'medium' | 'large';
}

export const Avatar = ({children, variant, ...props}: Props) => {
    return (
        <div className='avatar' {...props} 
            style={{
                maxWidth: variant === 'small' ? '100px' : variant ===  'medium' ? '300px' : '500px',
                maxHeight: variant === 'small' ? '100px' : variant ===  'medium' ? '300px' : '500px',
                }}
        >
            {children}
        </div>
    )
}