import * as React from "react";
<<<<<<< HEAD
import '../styles/App.scss';
import 'antd/dist/antd.css';
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

=======
import '../styles/App.css';

export default class App extends React.Component {
>>>>>>> cebb3b4f9edcaf7d303c2eb5ee8eab7269d95dc3
    render() {
        const {tasks} = this.state;
        return (
            <div className="wrapper">
                <h2>ToDo List App</h2>
                <Search placeholder="Search for the task"
                        size="large"
                        className="search-form"
                        enterButton />
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div className="task" key={`${task}${index}`}>
                            <CheckCircleOutlined />
                            <p>{task}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
<<<<<<< HEAD

=======
>>>>>>> cebb3b4f9edcaf7d303c2eb5ee8eab7269d95dc3
