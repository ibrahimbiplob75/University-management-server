import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/AcademicSemester/academicSemester.route";

const route=Router();

const moduleRoutes=[
    {
        path:"/users",
        route:UserRoutes
    },
    {
        path:"/students",
        route:StudentRoutes,
    },
    {
        path:"/academic-semesters",
        route:AcademicSemesterRoutes
    },
]

moduleRoutes.forEach((routeInfo)=>route.use(routeInfo.path,routeInfo.route))

export default route;