import React, { useEffect } from 'react';
import css from './CardAdditionalPackage.module.scss';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Switch from "react-switch";

// import { Container } from './css';

export default function CardAdditionalPackage({ passenger, changepassenger, data }) {

    useEffect(() => {
        passenger.map((passenger, key) => {

            passenger.additionalPackages = passenger.additionalPackages ? passenger.additionalPackages : [];
        });

    }, [])
    return (
        <label>
        <span>Switch with default style</span>
        <Switch   />
      </label>
    )
}

