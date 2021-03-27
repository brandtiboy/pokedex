import React from "react";

import Pokemon from "./Pokemon";

export default {
  title: "Components/Pokemon",
  component: Pokemon,
};

const Template = () => (
  <Pokemon
    image='https://via.placeholder.com/150'
    name='Pikachu'
    content='This is a yellow pokemon'
  />
);

export const Default = Template.bind({});
