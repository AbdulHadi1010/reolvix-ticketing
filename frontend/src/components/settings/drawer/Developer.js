import { Box, Stack, Avatar, Typography, Button, alpha } from "@mui/material";

// Devloper Logo
import Logo from "../../../assets/icons/logo/resolvix.ico";

export default function Developer() {
  const openLinkInNewTab = () => {
    window.open("https://github.com/AbdulHadi1010/resolvix-ticketing", "_blank");
  };

  return (
    <Box
      width={"100%"}
      component={Button}
      onClick={openLinkInNewTab}
      sx={{
        "&:hover": {
          backgroundColor: (theme) => theme.palette.background.default,
        },
      }}
    >
      <Stack direction={"column"} alignItems={"center"} spacing={2}>
        <Avatar
          src={Logo}
          alt={"Resolvix Team"}
          sx={{
            width: 90,
            height: 90,
            p: 1,
            border: (theme) =>
              `1px dashed ${alpha(theme.palette.grey[500], 1)}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <Typography
          variant="caption"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          Developed by Resolvix-Team
        </Typography>
      </Stack>
    </Box>
  );
}
