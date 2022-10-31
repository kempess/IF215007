import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Header from "../layout/Header";

function Home() {
  return (
    <Header bgClass="bg-image" title="Makanan Anak Kost">
      <Button
        as={Link}
        to="/recipes"
        color="linkedin"
        content="Cari Resepnya"
        size="big"
      />
    </Header>
  );
}
export default Home;
