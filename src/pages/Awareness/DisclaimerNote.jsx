import { Link } from "react-router-dom";
import { FaShieldHalved } from "react-icons/fa6";

export default function DisclaimerNote({ children, className = "mt-12" }) {
  return (
    <div role="note" className={`${className} flex items-start gap-4 rounded-2xl bg-(--color-primary-soft) p-6`}>
      <FaShieldHalved aria-hidden="true" className="mt-1.5 shrink-0 text-2xl text-(--color-primary)" />
      <p className="text-lg leading-9">
        {children}{" "}
        <Link to="/help" className="font-bold text-(--color-primary) underline underline-offset-4">
          متى أطلب دعمًا متخصصًا؟
        </Link>
      </p>
    </div>
  );
}
