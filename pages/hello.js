import React from "react";

const Hello = ({ hello = "world" }) => {
  return (
    <div>
      <h1>Hello {hello}</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default Hello;
