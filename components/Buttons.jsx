import styled from 'styled-components';

export const Button = styled.button`
  --color: ${({ theme }) => theme.main};
  ${({ width100 }) => (width100 ? 'width:100%;' : '')}
  min-width: ${({ icon }) => (icon ? '2rem' : '3rem')};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  padding: 6px;
  font-size: .8rem;
  font-weight: 800;
  background-color: rgb(var(--color));
  color: white;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(var(--color), .3);
    color: rgb(var(--color));
  }
  &:active {
    transform: scale(.97)
  }
  & svg {
    font-size: 1rem;
    ${({ icon }) => (icon ? '' : 'margin-right:5px;')}
  }
`;

export const SmallButton = styled(Button)`
  font-size: .6rem;
  font-weight: 600;
  padding: 4px;
  border-radius: ${({ theme }) => `calc(${theme.borderRadius} / 1.25)`};
  & svg {
    font-size: 1.5em;
  }
`;
