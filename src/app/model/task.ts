export interface ITask {
    name: string,
    type: number,
    isDeleted: boolean,
    id: number
}


export enum ETypeTask{
    common=0,
    other=1,
    null=2,
}