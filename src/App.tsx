import styled from 'styled-components';
import { useState } from 'react';
import {
  Fruit,
  IArrowContainerSCProps,
  IOptionSCProps,
  IOptionsSCProps,
} from './types';
import { fruits } from './data';
import { GlobalStyles } from './components/GlobalStyles';

const Container = styled.div`
  background-color: #ffffff;
  height: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Select = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 200px;
`;

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const ArrowContainer = styled.div<IArrowContainerSCProps>`
  transform: ${(props) =>
    props.$isOptionsActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease-in-out;
`;

const Options = styled.div<IOptionsSCProps>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
  max-height: 200px;
  overflow-y: auto;
`;

const Option = styled.div<IOptionSCProps>`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => (props.$isHighlighted ? '#00f' : 'inherit')};
  color: ${(props) => (props.$isHighlighted ? '#fff' : 'inherit')};

  &:last-child {
    border-bottom: none;
  }
`;

export default function App() {
  const [selectedOption, setSelectedOption] = useState<Fruit>('Apple');
  const [highlightedOption, setHighlightedOption] = useState<Fruit>('Apple');
  const [optionsActive, setOptionsActive] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Select>
          <SelectHeader onClick={() => setOptionsActive((prev) => !prev)}>
            <div>{selectedOption}</div>
            <ArrowContainer $isOptionsActive={optionsActive}>
              &#9660;
            </ArrowContainer>
          </SelectHeader>
          <Options $isActive={optionsActive}>
            {fruits.map((fruit, index) => (
              <Option
                key={index}
                onMouseOver={() => {
                  setHighlightedOption(fruit);
                }}
                onClick={() => {
                  setSelectedOption(fruit);
                  setHighlightedOption(fruit);
                  setOptionsActive(false);
                }}
                $isHighlighted={highlightedOption === fruit}
              >
                {fruit}
              </Option>
            ))}
          </Options>
        </Select>
      </Container>
    </>
  );
}
