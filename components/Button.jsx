import styled from 'styled-components';

export const Button = styled.section`
  --color: ${({ theme }) => theme.main};
  ${({ width100 }) => (width100 ? 'width:100%;' : '')}
  min-width: 3rem;
  border-radius: 8px;
  border: none;
  padding: 5px;
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
`;
