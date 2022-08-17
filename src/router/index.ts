import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoure {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',

}

export const publicRoutes: IRoure[] = [
    { path: RouteNames.LOGIN, element: Login }
];

export const privateRoutes: IRoure[] = [
    { path: RouteNames.EVENT, element: Event }
];