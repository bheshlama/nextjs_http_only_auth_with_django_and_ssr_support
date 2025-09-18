import { useDispatch } from "react-redux";
import { AppDispatch } from "core/store/store";

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
