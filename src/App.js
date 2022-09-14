import {useState} from "react";
import './App.css';


function App() {
  const [GameStart, setGameStart] = useState(false);

  if (GameStart) {
    return <>
      <a href="/">
        <img src={require('./dodoodle.png')} alt="dodoodle"/>
      </a>
      <br/>
      <div class="timer" id="Timer">게임 시작!</div>
      <br/>
      <canvas id="mouseDraw" class="draw" width="512" height="512"></canvas>
      <br/>
      <div class="timer" id="result"> </div>
      <br/>
      <button class="btn btn-outline"
        onClick={() => setGameStart(false)}
      >
        시작 페이지
      </button>
      <a class="btn btn-primary" href="/game">New Canvas!</a>
    </>
  } else {
    return <>
      <a href="/">
        <img src={require('./dodoodle.png')} alt="dodoodle"/>
      </a>
      <div>
        인공지능이 당신의 그림 실력을 평가합니다.
        <br/>
        제시어가 주어지면 20초 안으로 그리세요.
        <br/>
        자신있습니까 휴먼???
        <br/>
        <img src={require('./smile_ai.jpg')} alt="킹받는ai짤" width="512" height="512"/>
      </div>
      <br/>
      <button className="btn btn-primary"
        onClick={() => setGameStart(true)}
      >
        게임시작!
      </button>
    </>
  }
}

export default App;
