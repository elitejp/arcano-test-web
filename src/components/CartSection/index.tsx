import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StyledCartSection } from "./style";
import ProductCard from "../ProductCard";
import { ICartProp } from "./types";

const CartSection: React.FC<ICartProp> = ({ cart }) => {
  const carousel: any = useRef();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(carousel?.current.scrollWidth - carousel?.current.offsetWidth);
  }, [cart]);

  return (
    <StyledCartSection>
      <motion.ul ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileDrag={{ pointerEvents: "none" }}
        >
          {cart.products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </motion.div>
      </motion.ul>
    </StyledCartSection>
  );
};

export default CartSection;
