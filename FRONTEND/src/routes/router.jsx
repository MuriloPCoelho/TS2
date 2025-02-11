import { createBrowserRouter } from "react-router";
import Recibos from "../pages/recibos";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <>home</>
        },
        {
            path: "recibos",
            element: <Recibos />
        },
        {
            path: "mensagens",
            element: <>mensagens</>
        }
    ]
);