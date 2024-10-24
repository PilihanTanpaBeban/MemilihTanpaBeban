import { OPINI_KONTRA, OPINI_MIXED, OPINI_NO_ARGUMENT, OPINI_NORMATIVE, OPINI_PRO } from "./constants";

export const checkColor = (opini: string) => {
    switch (opini) {
        case "Pro":
            return OPINI_PRO;
        case "Cons":
            return OPINI_KONTRA;
        case "Mixed":
            return OPINI_MIXED;
        case "Normative":
            return OPINI_NORMATIVE;
        case "No Argument":
            return OPINI_NO_ARGUMENT;
        default:
            break;
    }
}