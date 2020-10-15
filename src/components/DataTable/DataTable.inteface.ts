import { Client } from '../../mocks/clients/clients.interface'

export interface DataTableComponentProps{
    data: Client[];
    onClickDelete: (index: number) => void;
    changeData: (id: number) => void;
    onEdit: () => void;
}

export interface DataTableComponentState{
    isEdited: boolean;
}