import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIndicator = () => {
  const navigate = useNavigate();

  return (
    <div className="text-end mt-3 mb-4">
      <Button
        className="d-inline-flex align-items-center py-2 px-3"
        variant="primary"
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart className="text-white" />
        <span className="ms-2">0</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
