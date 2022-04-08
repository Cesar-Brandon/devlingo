import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background } from '../../../assets';

export const Main = styled.main`
  display: flex;
  background-image: url(${Background}), linear-gradient(90deg, #181818 9%, #181818 100%);
  justify-content: center;
  background-size: 120% 120%;
  background-repeat: no-repeat;
  background-position: center center;
  align-items: center;
  min-height: 100vh;
`;

export const GloboCointainer = styled.div`
  position: relative;
  width: 35%;
`;

export const Globo = styled.div`
  font-family: 'Ubuntu Mono';
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding-inline: 1em;
  border-radius: 75%;
  aspect-ratio: 310 / 170;
  position: relative;
  background-color: #fff;

  &:before {
    content: '';
    position: absolute;
    border-top: 2vw solid transparent;
    border-right: 3vw solid #fff;
    border-bottom: 2vw solid transparent;
    left: 20%;
    bottom: 0;
    transform: rotate(70deg);
    z-index: -1;
  }
`;

export const HeroButtons = styled(Link)<{ primary?: string }>`
  font-weight: bold;
  text-decoration-line: none;
  padding: 0.5ch 1ch;
  border-radius: 0.5ch;
  box-shadow: 0 1ch #a11360;
  text-transform: uppercase;
  border: 0.3ch solid #ea1889;
  background-color: ${(props) => (props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (props.primary ? '#fff' : '#EA1889')};
  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export const Button = styled.button<{ primary?: string }>`
  font-size: inherit;
  font-weight: bold;
  text-decoration-line: none;
  padding: 0.5ch 1ch;
  border-radius: 0.5ch;
  box-shadow: 0 1ch #a11360;
  text-transform: uppercase;
  border: 0.3ch solid #ea1889;
  background-color: ${(props) => (!props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (!props.primary ? '#fff' : '#EA1889')};
  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  grid-area: options;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  & > * {
    flex-basis: 40%;
  }
`;
