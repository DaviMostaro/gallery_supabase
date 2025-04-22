import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;
    

    img {
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        max-width: 200px;
        max-height: 200px;
    }
`;

export const NameArea = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: space-between;

    span {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 10px;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        color: red;
    }
`;
