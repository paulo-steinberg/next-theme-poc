import type { GetServerSideProps, NextPage } from "next";
import { themeDecider } from "../helpers/themeDecider";
import { OneImovel } from "../themes/one/imovel";
import { TwoImovel } from "../themes/two/imovel";

interface Theme {
  theme: string;
  host: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const host = req.headers.host?.toString();

  console.log("Host: ", host);

  //Placeholder that will be replaced in the near future with the actual theme
  //const theme = themeDecider(host || "ONE");

  const theme = ["ONE", "TWO"];

  const random = Math.floor(Math.random() * theme.length);

  return {
    props: {
      theme: theme[random],
      host,
    }, // will be passed to the page component as props
  };
};

const Theme: NextPage<Theme> = ({ theme, host }) => {
  //It will be nice in the future to maybe have a safer way to do this switch
  //Maybe using consts so I wont have to write strings every time.
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
