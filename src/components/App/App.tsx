import * as React from "react";
import styles from './App.module.scss';

import Forms from '../Forms/Forms';
import DataTable from '../DataTable/DataTable';
import {MockClients} from '../../mocks/clients/index';
import {AppComponentProps, AppComponentState} from './App.interface';
import { Client } from '../../mocks/clients/clients.interface';

export default class App extends React.Component<AppComponentProps, AppComponentState> {
    constructor(props: AppComponentProps){
        super(props);
        this.state = {
            formsData: [...MockClients],
        }

        this.sendData = this.sendData.bind(this);
    }

    sendData(arr: Client, func: () => void){
        this.setState({
            formsData: [...this.state.formsData, arr],
        });

        func();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h3 className={styles["main-header"]}>Please, enter your information</h3>
                <Forms sendData={this.sendData} />
                <DataTable data={this.state.formsData}/>
            </div>

        );
    }
}

