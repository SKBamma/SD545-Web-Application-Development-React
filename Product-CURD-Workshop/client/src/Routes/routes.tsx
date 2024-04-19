import { Navigate } from "react-router-dom";
import AddFrameworks from "../pages/AddFramework/frameworks.add";
import FrameworksList from "../pages/Frameworks/frameworks.pages";
import PageNotFound from "../pages/PageNotFound.page";

{/* <Routes>
        <Route path='/frameworks' element={<FrameworksList />}></Route>
        <Route path='/add' element={<AddFrameworks />}></Route>
        <Route path='/' element={<Navigate to='/frameworks' />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>

      </Routes> */}
export default [
    {
        path: '/frameworks',
        element: <FrameworksList />
    },
    {
        path: '/add',
        element: <AddFrameworks />
    },
    {
        path: '/',
        element: <Navigate to='/frameworks' />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
];