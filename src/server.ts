import { serverHttp } from "./app";

serverHttp.listen(8080, () => {
    console.log("🚀 server started");
});