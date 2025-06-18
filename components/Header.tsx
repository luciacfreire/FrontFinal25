import { FunctionComponent } from "preact/src/index.d.ts";

const Header: FunctionComponent = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "left",
      }}
    >
      <a href="/">Todos</a>
      <a href="favorites">Favoritos</a>
    </div>
  );
};

export default Header;
