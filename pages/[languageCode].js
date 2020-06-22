import fetch from "cross-fetch";
import languageCodes from "../languageCodes";

export default function Home() {
  return <div></div>;
}

export const getStaticPaths = async () => {
  return {
    paths: languageCodes.map((languageCode) => ({
      params: {
        languageCode,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async () => {
  //   const filePath = `file:/` + process.cwd() + "language.json";

  //   console.log(filePath);

  //   const res = await fetch(filePath);

  //   console.log(res);

  return {
    props: {},
  };
};
