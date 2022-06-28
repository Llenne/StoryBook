import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Avatar, Props} from '../src/Avatar/Avatar'
import { template } from '@babel/core';
import { StockPhoto } from '../src/components/stockPhoto';


const Children = (
    <>
        <StockPhoto/>
    </>
)

const meta : Meta = {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        variant: {control: 'select'},
        children: {
            variant: 'small',
            defaultValue: Children
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Avatar {...args}/>

export const Default =  Template.bind({});