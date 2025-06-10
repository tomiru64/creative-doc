import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

function Portfolio() {
  return (
    <Container>
      <div>
        <Title title={"Portfolioのタイトルです"} />
        <div>
          <p>こちらはPortfolioサイトの本文です。</p>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
