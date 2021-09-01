import React from 'react';
import * as Styled from './style';

export default function Dropdown({ children, Component }) {

    const [open, setOpen] = React.useState(false);
    let element = React.useRef();

    React.useEffect(() => {
        document.addEventListener('click', handleHiden)
        return () => {
            document.removeEventListener('click', handleHiden);
        }

    }, [open])


    const handleHiden = (e) => {
        if (open && element.current && !element.current.contains(e.target)) setOpen(false)
    }



    return (
        <Styled.DropDown ref={element}>
            {<button onClick={() => setOpen(open => !open)}>{Component}</button>}
            {
                open &&
                <Styled.Container role={'dropdown-area'} >
                    {children}
                </Styled.Container>
            }
        </Styled.DropDown>
    );
}

