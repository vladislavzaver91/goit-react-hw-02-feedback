import { BtnContainer, Btn } from "./FeedbackOpt.styled";


export default function FeedbackOpt({ options }) {
    return (
        <BtnContainer>
      <Btn onClick={options} id='1'>Good</Btn>
      <Btn onClick={options} id='2'>Neutral</Btn>
      <Btn onClick={options} id='3'>Bad</Btn>
    </BtnContainer>
    )
}