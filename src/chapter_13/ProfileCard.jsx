import React from "react";
import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title={"우민혁"} backgroundColor="#4ea04e">
      <p>안녕하세요.</p>
      <p>리액트 개발자입니다.</p>
    </Card>
  );
}

export default ProfileCard;
