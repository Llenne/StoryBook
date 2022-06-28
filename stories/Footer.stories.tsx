import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Footer, Props} from '../src/Footer/Footer'
import { HeaderLogo } from '../src/components/headerLogo'
import { Navigation } from '../src/Navigation/navigationMenu'
import { SecondaryMenu } from '../src/Navigation/secondaryMenu'


const Children = (
    <>
        <div className='footer-container'>
            <div className='logo-holder'>
                <HeaderLogo/>
            </div>
            <div className='nav-holder'>
                <Navigation/>
            </div>
        </div>
        <div className='footer-container'>
            <div className='secondary-nav'>
                <SecondaryMenu/>
            </div>
        </div>
    </>
)

const meta : Meta = {
    title: 'Footer',
    component: Footer,
    argTypes: {
        children: {
            variant: 'narrow',
            defaultValue: Children,
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Footer {...args}/>

export const Default =  Template.bind({});

export const Wide =  Template.bind({});

Wide.args = {
    variant: 'wide',
    children:  Children,
    sticky: false
};