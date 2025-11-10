import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/AcademicSemester/academicSemester.route";
import { AcademicFecultyRoutes } from "../modules/AcademicFeculty/academicFeculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";

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
    {
        path:"/academic-faculties",
        route:AcademicFecultyRoutes
    }
    ,
    {
        path:"/academic-department",
        route:AcademicDepartmentRoutes
    }
]

moduleRoutes.forEach((routeInfo)=>route.use(routeInfo.path,routeInfo.route))

export default route;