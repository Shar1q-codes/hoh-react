import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import { useLoadingState } from "../hooks/useLoadingState";

const LoadingWrapper = ({ children }) => {
  const isLoading = useLoadingState();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div key="content">{children}</div>
      )}
    </AnimatePresence>
  );
};

export default LoadingWrapper;
