import * as React from "react";
import styles from './App.module.scss';

import Forms from '../Forms/Forms';
import DataTable from '../DataTable/DataTable';
import {AppComponentProps, AppComponentState} from './App.interface';

export default class App extends React.Component<AppComponentProps, AppComponentState> {
    render() {
        return (
            <div className={styles.wrapper}>
                <h3 className={styles["main-header"]}>Please, enter your information</h3>
                <Forms />
                <DataTable />
            </div>

        );
    }
}

