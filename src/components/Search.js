import React, { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    props.onSearch(query);
  };

  return (
    <Grid textAlign="center" columns={2} className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipes With{" "}
          <span style={{ color: "a500" }}>FoodKost</span>
        </h2>
        <h4>Selalu berkreasi walau bahan seadanya</h4>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Telur, mie, soup.."
            action={{ icon: "search", color: "yellow" }}
            fluid
            onChange={handleChange}
            value={query}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}
export default Search;
