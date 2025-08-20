Here's a simple yet elegant button component in TypeScript for your luxury dark AirBNB website named HouseIL. This button is styled to fit a high-end design aesthetic using pink and black colors.

// components/ui/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary'; disabled?: boolean }>`
  background-color: ${({ variant }) => (variant === 'primary' ? '#D5006D' : '#000')};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#D5006D')};
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ variant }) => (variant === 'primary' ? '#C4005A' : '#333')};
    color: #fff;
  }

  &:disabled {
    background-color: #555;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

### Explanation:
- **Styled Components**: The button is styled using `styled-components` for a clean and modular approach.
- **Props**: The button accepts `onClick`, `children`, `variant`, and `disabled` props.
  - `variant`: Determines the button's color scheme (primary or secondary).
  - `disabled`: Disables the button and changes its appearance when true.
- **Hover Effects**: The button has hover effects to enhance user interaction.
- **Accessibility**: The button is designed to be accessible with proper color contrasts.

You can customize the styles further to match your specific design requirements.