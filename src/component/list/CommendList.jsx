import React from 'react';
import styled from 'styled-components';
import CommendListItem from './CommendListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommendList(props) {
    const { comments } = props;

    return (
        <Wrapper>
            { comments.map(comment => {
                return (
                    <CommendListItem 
                        key={comment.id}
                        comment={comment}
                    />
                )
            })}
        </Wrapper>
    );
}

export default CommendList;