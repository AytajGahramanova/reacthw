import React from "react";
import Card from "./Card";

const Cards = () => {
  const logger = (params) => {
    console.log(params);
  };

  return (
    <div style={{ display: "flex", padding: "40px 100px",} }>
      <div>
        <div className="text">
          <h1 style={{fontSize: "22px", fontWeight: "bold"}}>A better way to start building.</h1>
        </div>
      </div>
    <div className="about" style={{display: "flex", marginLeft: "50px", flexWrap: "wrap",}}>
    <Card
        logger={logger}
        titleColor="black"
        title="Featured title"
        bgImg="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
      />
      <Card
        logger={logger}
        titleColor="black"
        title="Featured title"
        bgImg="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww"
      />
      <Card
        logger={logger}
        titleColor="black"
        title="Featured title"
        bgImg="https://media.istockphoto.com/id/1364208715/photo/pink-wool-knitted-sweater-flies-as-if-dancing-hands-up-levitates-on-cyan-background-concept.webp?b=1&s=170667a&w=0&k=20&c=NJw4hcH3FjVRZ94ssOpgxYN3m5U9OeCcw06VeXqzCPU="
      />
      <Card
        logger={logger}
        titleColor="black"
        title="Featured title"
        bgImg="https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.webp?b=1&s=170667a&w=0&k=20&c=CqGVvbX1J5GSdiFgy1XMDK6K8zYz8rWjRk9hd_v-y9Y="
      />
    </div>
    </div>
  );
};

export default Cards;
