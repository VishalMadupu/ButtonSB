import React from 'react';
import Button from '../app/component/button/page';
import '../assets/scss/components/button.scss';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger'],
            },
        },
        loading: { control: 'boolean' },
        className: { control: 'text' }, // Allows adding custom class names
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    variant: 'primary',
    className: 'btn btn-primary',
    loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary',
    className: 'btn btn-secondary',
    loading: false,
};

export const Success = Template.bind({});
Success.args = {
    children: 'Success Button',
    variant: 'success',
    className: 'btn btn-success',
    loading: false,
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger Button',
    variant: 'danger',
    className: 'btn btn-danger',
    loading: false,
};
