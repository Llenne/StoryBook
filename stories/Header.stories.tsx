import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Header, Props} from '../src/Header/Header'
import { HeaderLogo } from '../src/components/headerLogo'
import { CTAButton } from '../src/Header/ctaButton'
import { Navigation } from '../src/Navigation/navigationMenu'


const Children = (
    <>
         <div className='logo-holder'>
            <HeaderLogo/>
         </div>
         <div className='nav-holder'>
            <Navigation/>
         </div>
         <div className='cta-button'>
            <CTAButton/>
         </div>
    </>
)

const meta : Meta = {
    title: 'Header',
    component: Header,
    argTypes: {
        children: {
            variant: 'narrow',
            defaultValue: Children,
            sticky: true
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Header {...args}/>

export const Default =  Template.bind({});

export const Wide =  Template.bind({});

Wide.args = {
    variant: 'wide',
    children:  Children,
    sticky: false
};
