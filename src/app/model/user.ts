export interface IUser {
    name: string,
    isActive: boolean,
    type: ETypeUser|null,
    jobTitle: string|null,
    level: ELevel,
    userCode: string|null,
    avatarPath: string,
    branch: EBranch,
    id: number
}


export interface IFilter{
  branch:number,
  type:number,
  level:number
}

export enum ETypeUser{
  Staff=0,
  InternShip=1,
  Collaborator=2,
  All,
}

export enum EBranch{
    HaNoi=0, 
    DaNang=1,
    HoChiMinh=2,
    Vinh=3,
    All,
}

export enum ELevel{
  Intern0=0,
  Intern1=1,
  Intern2=2,
  Prefresher=3,
  Fresher0=4,
  Fresher1=5,
  Fresher2=6,
  Junior0=7,
  Junior1=8,
  Junior2=9,
  Middle0=10,
  Middle1=11,
  Middle2=12,
  Senior0=13,
  Senior1=14,
  Senior2=15,
  All,
}



