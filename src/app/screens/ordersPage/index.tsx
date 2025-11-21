import { useState, SyntheticEvent } from "react";
import { Avatar, Box, Container, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";
import Typography from "@mui/joy/Typography";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table-list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-context"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
           <Stack
        className="order-info-box">
        <Stack
          className="member-box"
          alignItems="center"
          textAlign="center"
        >
          <Box className="order-user-img">
            <Avatar
              src="/img/justin.webp"
              className="order-user-avatar"
            />
            <Avatar
              src="/icons/user-badge"
              className="order-user-badge"
            />
          </Box>

          <Typography className="order-user-name">
            Alex
          </Typography>

          <Typography className="order-user-prof">
            USER
          </Typography>

          <Stack className="member-location">
            <Stack
              direction="row"
              alignItems="center"
              className="member-location-info"
            >
              <LocationOnIcon />
              <Typography >
                Seoul, South Korea
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        className="order-payment-info-box">
        <Box
          className="payment-card-number" >
          Card number: **** 5678 9000 1234
        </Box>

         <Stack className="payment-card-datas" > 
          <Box className="payment-card-data">
            07/24
          </Box>
          <Box className="payment-card-data">
           CVV: 010
          </Box>
        </Stack>
         <Box
          className="payment-card-user-name" >
          Alex Robertson
        </Box>

        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          pt={2}
          className="payment-card-types"
        >
          <img src="/icons/western-card.svg" width={40} alt="western" />
          <img src="/icons/master-card.svg" width={40} alt="mastercard" />
          <img src="/icons/paypal-card.svg" width={40} alt="paypal" />
          <img src="/icons/visa-card.svg" width={40} alt="visa" />
        </Stack>
      </Stack>
        </Stack>
      </Container>
    </div>
  )
}