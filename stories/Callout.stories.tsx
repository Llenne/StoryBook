import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Callout, Props} from '../src/CalloutAvatar/Callout'
import { template } from '@babel/core';



const meta : Meta = {
    title: 'Callout',
    component: Callout,
    argTypes: {
        heading: {
            defaultValue: 'Lorem Ipsum',
        },
        subHeading: {
            defaultValue: 'Donec sodales sagittis magna',
        },
        description: {
            defaultValue: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        },
        headingColor: { 
            control: 'color',
            defaultValue: '#2499FF',
        },
        subHeadingColor: { 
            control: 'color',
            defaultValue: '#102340'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Callout {...args}/>

export const Default =  Template.bind({});

Default.args = {
    heading: 'Lorem Ipsum',
    headingColor: '#102340',
    subHeadingColor: '#2499FF'

}