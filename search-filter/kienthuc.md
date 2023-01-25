import { useEffect, useState } from "react";

function App() {
let time = new Date().toLocaleTimeString();
const [currentTime, setCurrentTime] = useState(time);

const updateTime = () => {
let time = new Date().toLocaleTimeString();
setCurrentTime(time);
};

setInterval(updateTime, 1000);

return (

<div>
<h1>{currentTime}</h1>
</div>
);
}

export default App;

Reac-markdown sử dụng cây cú pháp để xây dựng dom ảo chỉ cho phép cập nhật DOM đang thay đổi thay vì ghi đè hoàn toàn
