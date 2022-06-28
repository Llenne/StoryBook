import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, Props} from '../src/Button/Button'
import { template } from '@babel/core';


const meta : Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            variant: 'primary',
            withIcon: false,
            defaultValue: 'Click Me',
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default =  Template.bind({});

export const secondary =  Template.bind({});

Default.args = {
    variant: 'primary',
    withIcon: false,
    children:  'Learn More',
};

secondary.args = {
    variant: 'secondary',
    withIcon: false,
    children:  'Learn More',
};
