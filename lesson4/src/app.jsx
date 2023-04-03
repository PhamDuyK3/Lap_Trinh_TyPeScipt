import { useState } from "react";
import Avatar from "./components/avatar";
import Board from "./components/board";
import Square from "./components/square";
// Props: Là một đối tượng, truyền dữ liệu từ cha xuống con
// Props: Immuatable
const App = () => {
   
    return <div className="h-[100vh] flex justify-center items-center">
        <Board/>
    </div>
}
export default App