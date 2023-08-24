import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import Header from '../../components/header/header';
import './apply.css';

function APPLY() {
  const maxLength = 200;
  const navigate = useNavigate();
  const [hakbun, setHakbun] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [fiveme, setFiveme] = useState('');
  const [content, setContent] = useState('');
  const [textCount, setTextCount] = useState(0);

  const handleContentChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setContent(inputValue);
      setTextCount(inputValue.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기서 실제로 지원 데이터를 처리하는 로직을 추가하세요.
  };

  return (
    <div>
        <Header navigate={navigate}/>
        <div className="margin">
            <div className="title">지원하기</div>
            <hr id="title_hr" />
            <div className="margin">
                <center>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                    <table width="95%" className="list-table">
                        <tbody>
                        <tr className="content">
                            <td>학번</td>
                            <td>
                            <input
                                type="text"
                                id="hakbun"
                                name="hakbun"
                                placeholder="1401"
                                value={hakbun}
                                onChange={(e) => setHakbun(e.target.value)}
                            />
                            </td>
                        </tr>
                        <tr className="content">
                            <td>이름</td>
                            <td>
                            <input type="text"
                                   id="name" 
                                   name="name" 
                                   placeholder="김미림"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="content">
                            <td>전화번호</td>
                            <td>
                            <input type="text"
                                   id="tel" 
                                   name="tel" 
                                   placeholder="01012345678"
                                   value={tel}
                                   onChange={(e) => setTel(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="content">
                            <td>나를 5가지로 표현한다면?</td>
                            <td>
                            <input type="text"
                                   id="fiveme" 
                                   name="fiveme"
                                   maxLength={5} 
                                   value={fiveme}
                                   onChange={(e) => setFiveme(e.target.value)}
                                />
                            </td>
                        </tr>
                        {/* 나머지 입력 필드도 위와 같은 방식으로 처리 */}
                        <tr className="content">
                            <td>지원동기</td>
                            <td colSpan="2">
                            <textarea
                                name="content"
                                id="text"
                                rows="6"
                                placeholder="내용을 입력해주세요(200자 이내)"
                                value={content}
                                onChange={handleContentChange}
                            />
                            <div id="text_cnt">({textCount}/{maxLength})</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="submit" className="apply" value="지원하기" style={{ cursor: 'pointer' }} />
                    </form>
                </div>
                </center>
            </div>
        </div>
    </div>
  );
}

export default APPLY;
