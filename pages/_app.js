import React from "react";

const things = require.context("../things", true, /\.js$/);

console.log(
  things.keys().map((key) => {
    const module = things(key);

    return module.default;
  })
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export async function getStaticPaths(...args) {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps(...args) {
//   console.log("LOADING STATIC PROPS FROM _app");

//   return {
//     props: {},
//   };
// }

export default MyApp;
