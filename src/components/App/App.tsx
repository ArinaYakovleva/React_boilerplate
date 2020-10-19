import * as React from "react";
import styles from './App.module.scss';

import Forms from '../Forms/Forms';
import DataTable from '../DataTable/DataTable';
import {MockClients} from '../../mocks/clients/index';
import {AppComponentProps, AppComponentState} from './App.interface';
import { Client } from '../../mocks/clients/clients.interface';

export class App extends React.Component<AppComponentProps, AppComponentState> {
    constructor(props: AppComponentProps){
        super(props);
        this.state = {
            formsData: [...MockClients],
            isEdited: false,
            id: 0,
        }

        this.onEdit = this.onEdit.bind(this);
    }

   

    // onUpdate( arr: Client, func: () => void,  isValid: boolean){ 

    //     const {formsData, id} = this.state;
    //     const updatedArr = [...this.state.formsData];
    //         updatedArr[id].firstName =  arr.firstName,
    //         updatedArr[id].lastName = arr.lastName;
    //         updatedArr[id].age = arr.age;
    //         updatedArr[id].phone = arr.phone;
    //         updatedArr[id].age = arr.age;

    //         if(formsData[id].vehicles){
    //             updatedArr[id].vehicles = [...formsData[id].vehicles,
    //             {manufacturer: arr.vehicles[0].manufacturer,
    //                 model: arr.vehicles[0].model,
    //                 year: arr.vehicles[0].year,
    //             }];
    //         }else{
    //             updatedArr[id].vehicles = [
    //             {manufacturer: arr.vehicles[0].manufacturer,
    //                 model: arr.vehicles[0].model,
    //                 year: arr.vehicles[0].year,
    //             }];
    //         }

    //     if(isValid && arr.firstName && arr.lastName && arr.age && arr.phone){   
    //         this.setState({
    //             formsData: [...updatedArr],
    //             isEdited: false,
    //         });
    //     }else{
    //         this.setState({
    //             isAnyCorrect: false,
    //         });
    //         return;
    //     }

    //     func();
        

    // }
    onEdit(newId: number){
        this.setState({
            isEdited: true,
            id: newId,
        });
    }


    render() {
        const {clients, sendData, removeData, editData} = this.props; 
        return (
            <div className={styles.wrapper}>
                <h3 className={styles["main-header"]}>Please, enter your information</h3>
                <Forms sendData={sendData}
                       onUpdate={editData}
                       id={this.state.id}
                       length={this.state.formsData.length}
                       edited={this.state.isEdited}
                       />
                <DataTable data={clients} 
                           onEdit={this.onEdit}
                           onDelete={removeData}/>
            </div>

        );
    }
}

