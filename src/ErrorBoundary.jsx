import React from 'react';

// import { Container } from './styles';

export default class ErrorBoundary extends React.Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({ error: true })
    }

    render() {

        if (this.state.error) {

            return <div>
                <h5>Desculpe</h5>
                <p>Ocorreu um erro ao tentarmos processar sua solicitação. Fique tranquilo, nós já estamos
                trabalhando para corrigir o problema e vamos resolvê-lo logo.
                </p>
            </div>
        } else {

            return this.props.children
        }
    }
}