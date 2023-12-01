import { useState } from "react";
import IconSwitch from "./Icon";
import products from "./Products";
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";

function Store() {
  const [position, setPosition] = useState(true);

  const toggle = () => {
    setPosition((position) => !position);
    console.log(position);
  };

  return (
    <>
      <div className="box-nav">
        <IconSwitch icon={position ? "line" : "block"} onSwitch={toggle} />
      </div>
      <div>
        {position ? (
          <div className="box-line">
            <ListView items={products} />
          </div>
        ) : (
          <div className="box-block">
            <CardsView cards={products} />
          </div>
        )}
      </div>
    </>
  );
}

export default Store;
