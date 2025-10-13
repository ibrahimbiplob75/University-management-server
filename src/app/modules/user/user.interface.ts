export type Tuser={
    id:string;
    password:string;
    needspasswordchange:boolean;
    role:"admin"|'student' | 'faculty';
    status:"in-progress" | "blocked";
    isDeleted:boolean
};
