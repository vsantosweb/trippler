import React from 'react';
import css from './SearchBar.module.scss';

export default function SearchBar() {

    return (
        <div className={css.searchContent}>
            <label className={css.searchBar}>
                <span class="hrc-1wObg" data-reactid=".123nnmx7gxm.1.2.1.1.1.0.0.0.0">
                    <i class="hu-icon hu-icon-search" data-reactid=".123nnmx7gxm.1.2.1.1.1.0.0.0.0.0"></i>
                </span>
                <input type="text" />
            </label>
        </div>
    );
}