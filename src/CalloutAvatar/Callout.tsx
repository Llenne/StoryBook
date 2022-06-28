import React, { HTMLAttributes } from 'react';
import './Callout.css';

export interface Props extends HTMLAttributes<HTMLDivElement>{
    heading: String;
    headingColor: String;
    subHeading: String;
    subHeadingColor: String;
    description: String;
}

export const Callout = ({heading, headingColor, subHeading, subHeadingColor, description, ...props}: Props) => {
    return (
        <div {...props}>
            <h3 className="subheader_text" style={{ color: `${subHeadingColor}` }}>{subHeading}</h3>
            <h2 className='header_text' style={{ color: `${headingColor}` }}>{heading}</h2>
            <p className='description_text'>{description}</p>
        </div>
    )
}