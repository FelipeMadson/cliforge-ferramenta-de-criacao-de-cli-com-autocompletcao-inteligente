import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('CLIForge: Ferramenta de Criação de CLI com Autocompletção Inteligente')).toBeInTheDocument();
  });

  it('shows the title correctly', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('CLIForge: Ferramenta de Criação de CLI com Autocompletção Inteligente');
  });

  it('has interactive buttons', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Count: 0/i });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /Count: 1/i })).toBeInTheDocument();
  });

  it('renders Feature component', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
  
  it('has proper layout text', () => {
    render(<App />);
    expect(screen.getByText(/Domain logic for/i)).toBeInTheDocument();
  });
});
