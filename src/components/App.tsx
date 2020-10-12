// Сначала импорты из базовых библиотек (React, Ant Design, Moment, Lodash etc)
import * as React from "react";
import { Input } from 'antd';
// Потом импорты компонентов и стилей
import { CheckCircleOutlined } from '@ant-design/icons';
import styles from './App.module.scss';
// Общие константы из компонентов или просто константы для компонента
const { Search } = Input;

/*
* Это для того, чтобы можно бысро найти импорты, которые используешь. Когда будет много импортов эту оптимизацию точно полюбишь)
* */

export interface AppComponentProps {
    // Впоследствии эти интерфейсы лучше выводить в отдельный файл (App.interface.ts).
    // Когда будет много пропсов дойти ко компоненты придется пролистав строк 100-200. Лишнее время...
}
export interface AppComponentState {
    // Аналогично пропсам
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
            <div className={styles.wrapper}>
                <h2 className={styles["main-header"]}>ToDo List App</h2>
                <Search placeholder="Search for the task"
                        size="large"
                        className={styles["search-form"]}
                        enterButton />
                <div className={styles.tasks}>
                    {tasks.map((task, index) => (
                        <div className={styles.task} key={`${task}${index}`}>
                            <CheckCircleOutlined />
                            <p className={styles["task-name"]}>{task}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

