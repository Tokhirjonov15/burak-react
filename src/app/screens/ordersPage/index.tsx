import { useState, SyntheticEvent, useEffect } from "react";
import { Avatar, Box, Container, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import Typography from "@mui/joy/Typography";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";
import "../../../css/order.css";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } = 
    actionDispatch(useDispatch());
  const { orderBuilder, authMember } = useGlobals();
  const history = useHistory();
  const [value, setValue] = useState("1");
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE, 
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /** HANDLERS */
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

   if (!authMember) history.push("/");
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
              <PausedOrders setValue={setValue} />
              <ProcessOrders setValue={setValue} />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
           <Stack className="order-info-box">
              <Stack
                className="member-box"
                alignItems="center"
                textAlign="center"
              >
              <Box className="order-user-img">
                <Avatar
                  src={
                    authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/default-user.svg"
                  }
                  className="order-user-avatar"
                />
                <Avatar
                  src={
                    authMember?.memberType === MemberType.RESTAURANT 
                        ? "/icons/restaurant.svg" 
                        : "/icons/user-badge.svg"
                  }
                  className="order-user-badge"
                />
              </Box>

              <Typography className="order-user-name">
                {" "}
                {authMember?.memberNick}
              </Typography>
              <Typography className="order-user-prof">
                {" "}
                {authMember?.memberType}
              </Typography>

              <Stack className="member-location">
                <Stack
                  direction="row"
                  alignItems="center"
                  className="member-location-info"
                >
                <LocationOnIcon />
                <Typography >
                  {authMember?.memberAddress 
                    ? authMember.memberAddress 
                    : "do not exist"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

      <Stack className="order-payment-info-box">
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