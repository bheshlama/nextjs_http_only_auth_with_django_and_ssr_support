import { useSelector } from "react-redux";
import { RootState } from "core/store/store";

export const useTypedSelector = useSelector.withTypes<RootState>();