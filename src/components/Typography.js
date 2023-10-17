import { Typography as Text } from "@mui/material";

export const Typography = ({ sx = {}, config = {}, children }) => {
  const sxMerged = { fontSize: 16, fontWeight: "300", color: "#EF7BA8", ...sx };
  return (
    <Text sx={sxMerged} {...config}>
      {children}
    </Text>
  );
};
