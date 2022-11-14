import styled from '@emotion/styled';

export const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const Btn = styled.button`
    background-image: linear-gradient(
        to right,
        #1fa2ff 0%,
        #12d8fa 51%,
        #1fa2ff 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    border: none;
    display: block;
    cursor: pointer;
    :hover {
        background-position: right center; 
        color: #fff;
        text-decoration: none;
    }
`;