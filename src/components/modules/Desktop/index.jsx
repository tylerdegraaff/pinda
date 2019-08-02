// https://react95.github.io/React95/?selectedKind=Alert&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=clippy%2Fpanel
import { Icon } from '@react95/core';
import { Modal } from '@react95/core';

import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'images/halftone-yellow.png?external';
import Cursor from 'cursors/Arrow.png?external';
import HandPointer from 'cursors/HandPointer.png?external'

const Container = styled.div`
    cursor: url(${Cursor}), auto;
`;

const DesktopHeader = styled.header`
    text-align: center;
    padding-top: 20px;
    background: ${(props) => props.theme.yellow};
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

const DesktopContent = styled.section`
    background-repeat: repeat;
    background-image: url(${BackgroundImage});
    height: calc(100vh - 20px);
    width: 100vw;
`;

const ExtendedIcon = styled(Icon)`
    image-rendering: pixelated;
    margin: auto;
`;

const Placeholder = styled.span`
    text-align: center;
    width: 100%;
    background-color: ${(props) => props.theme.yellow};
`;

const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    :hover{
        cursor: url(${HandPointer}), auto;
    }
`;

const ModalWindow = styled(Modal)`
    .TittleBar {
        color: ${(props) => props.theme.yellow};
    }
    background-color: ${(props) => props.theme.off_white};
    .draggable{
        background-color: ${(props) => props.theme.red};
    }
    .draggable:hover{
        cursor: url(${HandPointer}), auto;
    }
`;

const DesktopIcon = ({ name, text, onClose, children, modalProps }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <IconWrapper  onDoubleClick={() => setOpen(!open)}>
                <ExtendedIcon name={name} />
                <Placeholder>{text}</Placeholder>
            </IconWrapper>
            {open && (
                <ModalWindow
                    closeModal={() => {
                        setOpen(false);

                        if (onClose) {
                            onClose();
                        }
                    }}
                    {...modalProps}
                >
                    {children}
                </ModalWindow>
            )}
        </>
    );
};

const Desktop = () => (
    <Container>
        <DesktopHeader>
        </DesktopHeader>
        <DesktopContent>
            <DesktopIcon name='window_graph' text='Pinda TV' modalProps={{ defaultPosition: { x: 300, y: 200 }, title: 'Pinda TV' }}>
                <p>Pinda TV</p>
            </DesktopIcon>
            <DesktopIcon name='cd_music' text='Pinda FM' modalProps={{ defaultPosition: { x: 150, y: 500 }, title: 'Pinda FM'}}>
                <p>Pinda FM</p>
            </DesktopIcon>
        </DesktopContent>
    </Container>
);

export default Desktop;
