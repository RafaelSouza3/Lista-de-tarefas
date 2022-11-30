import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Inside = styled.div`
    margin: 0px calc((100% - 900px)/2);
    width: 100%;
`;

export const Area = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 1px solid #f1f1f1;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0px;
`;