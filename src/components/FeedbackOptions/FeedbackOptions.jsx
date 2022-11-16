import { BtnContainer, Btn } from "./FeedbackOptions.styled";


export function FeedbackOptions({ options }) {
    return (
        <BtnContainer>
      <Btn onClick={options} id='1'>Good</Btn>
      <Btn onClick={options} id='2'>Neutral</Btn>
      <Btn onClick={options} id='3'>Bad</Btn>
    </BtnContainer>
    )
}