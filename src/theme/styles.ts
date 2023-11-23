import { Styles } from "@chakra-ui/theme-tools"

export const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
    "::-webkit-scrollbar": {
      width: "10px",
      background: "#0b0f1e",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#ac31b7",
      borderRadius: "50px"
    }
  },
}
