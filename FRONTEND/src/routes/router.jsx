import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <>home</>
        },
        {
            path: "recibos",
            element: <>recibos</>
        },
        {
            path: "mensagens",
            element: <>mensagens</>
        }
    ]
);