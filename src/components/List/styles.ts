import styled from 'styled-components';

export const Container = styled.div`
    color: grey;
`;

export const Area = styled.div`
    margin: 10px 0px;
`;

type bgProps = {
    done: boolean
}

export const bgItems = styled.div(({ done }: bgProps) => (
    `
    background-color: #f1f1f1;
    border-right: 5px solid #228b22;
    border-radius: 5px;
    height: 100%;
    padding: 17px;

    label {
        text-decoration: ${done ? 'line-through' : 'unset'};
    }
`
));

export const absolute = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: white;
    background: #228b22;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    top: 50%;
    left: 47%;
`;