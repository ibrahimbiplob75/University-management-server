import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";

const route=Router();

const moduleRoutes=[
    {
        path:"/users",
        route:UserRoutes
    },
    {
        path:"/students",
        route:StudentRoutes,
    }
]

moduleRoutes.forEach((routeInfo)=>route.use(routeInfo.path,routeInfo.route))

export default route;