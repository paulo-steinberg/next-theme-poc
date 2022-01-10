import type { GetServerSideProps, NextPage } from "next";
import { themeDecider } from "../helpers/themeDecider";
import { OneImovel } from "../themes/one/imovel";
import { TwoImovel } from "../themes/two/imovel";

interface Theme {
  theme: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const host = req.headers.host?.toString();

  console.log("Host: ", host);

  const theme = themeDecider(host);

  return {
    props: {
      theme,
    }, // will be passed to the page component as props
  };
};

const Theme: NextPage<Theme> = ({ theme }) => {
  switch (theme) {
    case "ONE":
      return <OneImovel />;

    case "TWO":
      return <TwoImovel />;
    default:
      break;
  }

  return (
    <>
      <h1>Theme page</h1>
    </>
  );
};

export default Theme;
