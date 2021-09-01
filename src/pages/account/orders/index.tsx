import React from 'react'

type Props = {
    layout: (layout: 'AppLayout') => void;
}

export default function Orders({ layout }: Props) {

    React.useEffect(() => {
        layout('AppLayout')
    })
    return (
        <div>sdasd</div>
    )
}