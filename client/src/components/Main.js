import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom'; // userHistory
import axios from 'axios';

import Header from './Header';
import WordInput from './WordInput';
import WordCardStack from './WordCardStack';

class Main extends React.Component {
  state = {
    isLogin: null,
    currentWord: null,
    wordData: null,
  };

  getWordData() {
    // get 요청: 서버로부터 유저와 일치하는 모든 단어 / 예문을 불러온다.
    axios.get('url').then((res) => {
      this.setState({ wordData: res.data });
    });
  }

  postInputData() {
    // post 요청: 유저가 입력한 새로운 예문 / 단어를 서버에 전송한다.
    axios
      .post('url', {
        currentWord: this.state.currentWord,
        wordData: this.state.wordData,
      })
      .then((res) => {
        console.log(res);
      });
  }

  updateWordData() {
    // put 요청: 유저가 단어를 수정한 경우, 또는 예문을 수정 / 추가 / 삭제한 경우 그 값을 서버에 전송한다.
    axios
      .put('url', {
        currentWord: this.state.currentWord,
        wordData: this.state.wordData,
      })
      .then((res) => {
        console.log(res);
      });
  }

  deleteWordData() {
    // delete 요청: 유저가 단어 / 예문을 삭제한 경우 서버에 삭제를 요청한다.
    axios.delete('url/:userId/:wordId...', {
      withCredentials: true,
    });
    // delete 요청 body로 보내는 코드 추가
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="wordinput_form">
          <WordInput />
        </div>
        <div className="wordcard_stack">
          <WordCardStack />
        </div>
      </div>
    );
  }
}
export default Main;

// Main.js에서 라우팅 제거
