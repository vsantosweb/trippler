import React from 'react'
import { AuthContext } from '../../providers/auth/AuthProvider';
import ProfileAvatar from '../../resources/components/ProfileAvatar';
import withAuth from '../../utils/withAuth';
import * as Styled from './styles';
import Link from 'next/link';

type Props = {
    layout: (layout: 'AppLayout') => void
}

const Account = ({ layout }: Props) => {

    const { user, signOut } = React.useContext(AuthContext);



    React.useEffect(() => {
        layout('AppLayout')
    })

    return (
        <React.Fragment>
            <Styled.ProfileDisplay>
                <ProfileAvatar color={'default'} avatar={user.avatar ? <img src={user.avatar} /> : <i className={'las la-user'}></i>} />
                <Styled.ProfileInfo>
                    <span>{user.name}</span>
                    <small>{user.email}</small>
                </Styled.ProfileInfo>
                <a href={'/account/profile'}><i className={'las la-cog'}></i></a>
            </Styled.ProfileDisplay>
            <Link href={'/account/orders'}>
                <Styled.AccountCard>
                    <Styled.AccountCardIcon><i className="las la-file-alt"></i></Styled.AccountCardIcon>
                    <Styled.AccountCardContent>
                        <Styled.AccountCardTitle>Reservas</Styled.AccountCardTitle>
                        <Styled.AccountCardDescription>Veja os status das suas reservas</Styled.AccountCardDescription>
                    </Styled.AccountCardContent>
                    <Styled.AccountCardAction><i className={'las la-arrow-right'}></i></Styled.AccountCardAction>
                </Styled.AccountCard>
            </Link>
            <Link href={'/account/orders'}>
                <Styled.AccountCard>
                    <Styled.AccountCardIcon><i className="las la-suitcase-rolling"></i></Styled.AccountCardIcon>
                    <Styled.AccountCardContent>
                        <Styled.AccountCardTitle>Trips</Styled.AccountCardTitle>
                        <Styled.AccountCardDescription>Veja todas as suas trips programas, em andamento, canceladas</Styled.AccountCardDescription>
                    </Styled.AccountCardContent>
                    <Styled.AccountCardAction><i className={'las la-arrow-right'}></i></Styled.AccountCardAction>
                </Styled.AccountCard>
            </Link>

            <Styled.AccountCard href={'/account/trips'}>
                <Styled.AccountCardIcon><i className="las la-user"></i></Styled.AccountCardIcon>
                <Styled.AccountCardContent>
                    <Styled.AccountCardTitle>Perfil</Styled.AccountCardTitle>
                    <Styled.AccountCardDescription>Altere seus dados cadastrais</Styled.AccountCardDescription>
                </Styled.AccountCardContent>
                <Styled.AccountCardAction><i className={'las la-arrow-right'}></i></Styled.AccountCardAction>
            </Styled.AccountCard>

            <Styled.AccountCard onClick={signOut}>
                <Styled.AccountCardIcon><i className="las la-power-off"></i></Styled.AccountCardIcon>
                <Styled.AccountCardContent>
                    <Styled.AccountCardTitle>Sair</Styled.AccountCardTitle>
                </Styled.AccountCardContent>
                <Styled.AccountCardAction><i className={'las la-arrow-right'}></i></Styled.AccountCardAction>
            </Styled.AccountCard>

        </React.Fragment>
    );
}

export default withAuth(Account);