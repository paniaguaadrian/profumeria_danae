import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="descripion" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Profumeria Danae",
  description: "We sell the best perfumes",
  keywords: "perfumes, buy perfumes, best perfumes",
};

export default Meta;
