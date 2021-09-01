import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'


import DropDownMenu from './';

describe('DropDownMenu', () => {

    it('should start closed', () => {
        render(<DropDownMenu Component={'Abrir'}> content </DropDownMenu>);
    });

    it('should show options when open', () => {

        render(<DropDownMenu Component={'Abrir'}> content </DropDownMenu>);

        const dropdownButton = screen.getByRole('button');

        userEvent.click(dropdownButton);
        expect(screen.getByRole('dropdown-area')).toBeInTheDocument();
    });

})