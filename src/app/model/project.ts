export interface IProject {
    customerName?: string,
    name?: string,
    code?: string,
    status?: 0|1,
    pms?: [
      string
    ],
    activeMember?: number,
    projectType?: 0|1,
    timeStart?: "2021-11-17T03:57:49.524Z",
    timeEnd?: "2021-11-17T03:57:49.524Z",
    id?: number
}

export interface IParam{
    status?:0|1|null;
    search?:string|null;
}

