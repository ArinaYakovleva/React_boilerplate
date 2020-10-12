import * as React from "react";
import { Input } from 'antd';
const { Search } = Input;
import {CheckCircleOutlined} from '@ant-design/icons';

export interface AppComponentProps {
    
}
export interface AppComponentState {
    tasks: string[];
}

export default class App extends React.Component<AppComponentProps, AppComponentState> {
    constructor(props: any){
        super(props);
        this.state = {
            tasks: ['Make an app', 'Do jogging', 'Drink coffee'],
        }
        
    }

    render() {
        const {tasks} = this.state;
        return (
            <div className="wrapper">
                <h2 className="main-header">ToDo List App</h2>
                <Search placeholder="Search for the task"
                        size="large"
                        className="search-form"
                        enterButton />
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div className="task" key={`${task}${index}`}>
                            <CheckCircleOutlined />
                            <p className="task-name">{task}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

