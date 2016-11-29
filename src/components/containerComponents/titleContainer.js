// @flow
/**
 * Created by Dirk-Jan Rutten on 12/10/16.
 */

import React from 'react';

const style = {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 300,
        paddingTop: 20,
        height: 30
    },
    childContainer: {
        flex: 1,
        position: 'relative'
    }
};

type PropType = {
    title: string,
    children?: Element<*>
}

/**
 * A component that renders a container containing a title and a child react components.
 *
 * It should be used as follows:
 *
 * <TitleContainer title="Some Title">
 *      <div> child component </div>
 * </TitleContainer>
 */
export default ({title, children}: PropType) => (
    <div style={style.container}>
        <div style={style.title}>{title}</div>
        <div style={style.childContainer}>
            <div style={{height: '100%', width: '100%', position: 'absolute'}}>
                {children}
            </div>
        </div>
    </div>
);