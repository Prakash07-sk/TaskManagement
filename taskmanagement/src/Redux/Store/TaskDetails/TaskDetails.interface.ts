

export interface TaskDetails {
    isLoading: boolean;
    data : Array<TaskStruct>
};

export interface TaskStruct {
    title: string;
    status: 'ToDo' | 'Completed';
    UserDetails: string;
    description: string
}