import { motion } from "framer-motion";
import { EASE } from "../../common/Motion/Reveal";
import MediaCard from "./MediaCard";
import NoResults from "./NoResults";

export default function MediaGrid({ items, tab, onReset }) {
  if (items.length === 0) return <NoResults title={tab.none} resetLabel={tab.reset} onReset={onReset} />;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="h-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
        >
          <MediaCard item={item} headingLevel="h2" />
        </motion.div>
      ))}
    </div>
  );
}
