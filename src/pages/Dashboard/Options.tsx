import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button } from '@/components/';
import { IResponse } from '@/models';
import { useQuestions } from '@/hooks';

export const OptionsContainer = styled.div`
  display: grid;
  grid-area: options;
  row-gap: 1em;
  align-items: center;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-template-rows: min-content min-content;
  }
`;

interface props {
  options: IResponse[];
  id: string;
  index: number;
  points: number;
}

const Container = styled.div`
  display: grid;
  row-gap: 1em;
  align-items: center;
  color: #fff;
  margin-top: 1em;

  @media only screen and (min-width: 700px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

const getSeniorityText = (seniority: number, initialState: number) => {
  if (seniority === initialState) {
    return 'Senior';
  } else if (seniority < initialState && seniority > 50) {
    return 'Semisenior';
  } else if (seniority < 50 && seniority > 20) {
    return 'Junior';
  } else {
    return 'Trainee';
  }
};

export function Options({ options, index, id, points }: props) {
  const { seniority, initialState, DecrementSeniority } = useQuestions();

  const seniorityText = getSeniorityText(seniority, initialState);

  const navigate = useNavigate();

  const handleClick =
    ({ isCorrect }: IResponse) =>
    () => {
      const nextQuestion = +index + 1;
      if (nextQuestion === 13) return navigate('/results', { replace: true, state: seniorityText });
      if (!isCorrect) DecrementSeniority(points);
      navigate(`/question/${nextQuestion}`, { replace: true });
    };

  return (
    <div key={id} style={{ gridArea: 'options' }}>
      <div>
        <OptionsContainer>
          {options.map((option: IResponse) => (
            <Button onClick={handleClick(option)}>{option.text}</Button>
          ))}
        </OptionsContainer>
      </div>
      <Container>
        <h2>Puntaje inicial: {initialState}</h2>
        <h2>Puntaje actual: {seniority}</h2>

        <h2>sos {seniorityText}</h2>
      </Container>
    </div>
  );
}
