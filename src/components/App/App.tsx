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
            isEdited: false,
            id: 0,
            isAnyCorrect: true,
        }

        this.sendData = this.sendData.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    sendData(arr: Client, func: () => void, isValid: boolean){
        if( isValid && arr.firstName && arr.lastName && arr.age && arr.phone){
            this.setState({
                formsData: [...this.state.formsData, arr],
            });
        }else{
            this.setState({
                isAnyCorrect: false,
            });
            return;
        }

        func();
        
    }

    onClickDelete(id: number){ 
        const update = this.state.formsData.filter(el => el.id !== id);

        for(let i = 0; i < update.length; i++){
            update[i].id = i;
        }
        
        this.setState({
            formsData:[...update],
        });
    }

    onUpdate( arr: Client, func: () => void,  isValid: boolean){ 

        const {formsData, id} = this.state;
        const updatedArr = [...this.state.formsData];
            updatedArr[id].firstName =  arr.firstName,
            updatedArr[id].lastName = arr.lastName;
            updatedArr[id].age = arr.age;
            updatedArr[id].phone = arr.phone;
            updatedArr[id].age = arr.age;

            if(formsData[id].vehicles){
                updatedArr[id].vehicles = [...formsData[id].vehicles,
                {manufacturer: arr.vehicles[0].manufacturer,
                    model: arr.vehicles[0].model,
                    year: arr.vehicles[0].year,
                }];
            }else{
                updatedArr[id].vehicles = [
                {manufacturer: arr.vehicles[0].manufacturer,
                    model: arr.vehicles[0].model,
                    year: arr.vehicles[0].year,
                }];
            }

        if(isValid && arr.firstName && arr.lastName && arr.age && arr.phone){   
            this.setState({
                formsData: [...updatedArr],
                isEdited: false,
            });
        }else{
            this.setState({
                isAnyCorrect: false,
            });
            return;
        }

        func();
        

    }
    onEdit(newId: number){
        this.setState({
            isEdited: true,
            id: newId,
        });
    }


    render() {
        return (
            <div className={styles.wrapper}>
                <h3 className={styles["main-header"]}>Please, enter your information</h3>
                <Forms sendData={this.sendData}
                       onUpdate={this.onUpdate}
                       length={this.state.formsData.length}
                       edited={this.state.isEdited}
                       isAnyCorrect={this.state.isAnyCorrect}
                       />
                <DataTable data={this.state.formsData} 
                           onEdit={this.onEdit}
                           onDelete={this.onClickDelete}/>
            </div>

        );
    }
}

