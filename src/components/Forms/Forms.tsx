import * as React from "react";
import { Form, Input, InputNumber } from 'antd';
import styles from './Forms.module.scss';

import {FormsComponentState} from './Forms.interface';

export default class Forms extends React.Component<FormsComponentState>{
    constructor(props: any){
        super(props);
        this.state={
            input: '',
        }
    }
    render(){
        return(
            <div className={styles['left-forms']}>
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Surname">
                    <Input />
                </Form.Item>
                <Form.Item label="Age">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Vehicule">
                    <Input />
                </Form.Item>
                <Form.Item label="Model">
                    <Input />
                </Form.Item>
                <Form.Item label="Year">
                    <InputNumber />
                </Form.Item>
            </div>
        );
    }
}