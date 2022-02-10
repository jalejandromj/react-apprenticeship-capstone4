import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { act, render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import GeneralContextProvider from '../../state/GeneralContext';
import Header from './Header.component';

describe('Page UI', () => {
    const RenderHtml = () => {
        return(
            <GeneralContextProvider>
                <Header />
            </GeneralContextProvider>
        );
    }

    it('renders basic initial login elements', async () => {
        await act( async () => render(<RenderHtml/>));
      
        const headerLogo = screen.getByText("WizeCommerce");
        
        expect(headerLogo).toBeInTheDocument();
    })
})