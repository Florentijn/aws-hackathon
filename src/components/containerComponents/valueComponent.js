// @flow
/**
 * Created by Joshua Scheidt on 12-10-2016.
 */
import React from 'react';
import TitleContainer from './titleContainer'

type PropType = {
    value: string,
    title: string
}

const style = {
    container: {
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent:'center'
    },
    subContainer: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 300
    }
};

/**
 * A component that renders a container containing a value.
 * It should be used as a child for the TitleContainer.
 */
export default ({title, value}: PropType) => (
    <TitleContainer title={title}>
        <div style={style.container}>
            <div style={style.subContainer}>
                {value}
            </div>
        </div>
    </TitleContainer>
);