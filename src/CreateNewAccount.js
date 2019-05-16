import React from "react";
import "./style.scss";

const CreateNewAccount = props => {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className="createNewAccount">
      <p>なまえ</p>
      <input type="text" />
      <p>生年月日</p>
      <input type="date" name="bday" />
      <p>性別</p>
      <input type="radio" name="sex" />
      <label>男</label>
      <input type="radio" name="sex" />
      <label>女</label>
      <p>メールアドレス</p>
      <input type="text" />
      <p>パスワード</p>
      <input type="password" />
      <p>パスワード（確認用）</p>
      <input type="password" />
      <button>登録</button>
    </div>
  );
};

export default CreateNewAccount;
