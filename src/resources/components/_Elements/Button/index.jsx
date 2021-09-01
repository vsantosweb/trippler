import Link from 'next/link';
import React from 'react';

import * as Styled from './styles';

export default function Button({ variant, color, children, href, block, icon,  ...rest }) {
    return (
        <Styled.Container icon={icon} block color={color} variant={variant} {...rest}>
            {href ? <Link href={href}>{children}</Link>: children}
        </Styled.Container>
    );
}

