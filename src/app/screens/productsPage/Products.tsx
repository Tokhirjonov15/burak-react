import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
];

export default function Products() {
    return (
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"avatar-big-box"}>
                      <Box className="title">Burak Restaurant</Box>
                      <Box className="search-bar">
                        <div className="search-container">
                          <input
                            className="search-input"
                            type="text"
                            placeholder="Type here"
                          />
                          <Button
                            className="search-button"
                            color="primary"
                            variant="contained"
                          >
                            <span className="search-text">SEARCH</span>
                            <SearchIcon className="search-icon" />
                          </Button>
                        </div>
                      </Box>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                        <Stack
                          className="dishes-filter-box"
                          direction="row"
                          spacing={2} 
                          justifyContent="flex-end"
                        >
                            <Button 
                              variant={"contained"} 
                              color={"primary"} 
                              className={"order"}
                            >
                              NEW
                            </Button>
                            <Button 
                              variant={"contained"} 
                              color={"secondary"} 
                              className={"order"}
                            >
                              PRICE
                            </Button>
                            <Button 
                              variant={"contained"} 
                              color={"secondary"} 
                              className={"order"}
                            >
                              VIEWS
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"} >
                            <div className={"category-main"} >
                                <Button variant={"contained"} color={"secondary"}>
                                    Other
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Dessert
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Drink
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Salad
                                </Button>
                                <Button variant={"contained"} color={"primary"}>
                                    Dish
                                </Button>
                            </div>
                        </Stack>

                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product, index) => {
                                    return (
                                        <Stack key={index} className={"product-card"}>
                                            <Stack className={"product-img"}>
                                             <img src={product.imagePath} alt="" />
                                              <div className="product-sale">Normal size</div>
                                              <Button className={"shop-btn"}>
                                                <img 
                                                  src={"/icons/shopping-cart.svg"}
                                                  style={{ display: "flex"}}
                                                />
                                              </Button>
                                              <Button className={"view-btn"} sx={{ right: "36px"}}>
                                                <Badge badgeContent={20} color="secondary">
                                                    <RemoveRedEyeIcon  
                                                      sx={{ color: "gray"}} 
                                                    />
                                                </Badge>
                                              </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>
                                                <div className={"price-desc"}>
                                                    <MonetizationOnIcon />
                                                    {12}
                                                </div>
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data">New products are not available!</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className={"pagination-section"}>
                        <Pagination
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color={"secondary"}
                            />
                          )}
                        />
                    </Stack>
                </Stack>
            </Container>

            <div className={"brands-logo"}>
               <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Our Family Brands</Box>
                      <Stack className={"cards-frame"}>
                        <img src="/img/gurme.webp" className={"brand-img"} alt="" />
                        <img src="/img/seafood.webp" className={"brand-img"} alt="" />
                        <img src="/img/sweets.webp" className={"brand-img"} alt="" />
                        <img src="/img/doner.webp" className={"brand-img"} alt="" />
                      </Stack>
                </Stack>
            </Container>
            </div>

            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our address</Box>
                        <iframe
                          style={{ marginTop: "60px" }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47991.5361443031!2d69.2040889!3d41.3110815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b05d24c2561%3A0x48b7e61a7d926b53!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2skr!https://www.google.com/maps/place/Andijon+davlat+texnika+instituti/@40.786125,72.2977271,14.02z/data=!4m15!1m8!3m7!1s0x38bc901d6b13d4ef:0xfc45bcaa7973dfac!2sAndijan,+Andijan+region,+Uzbekistan!3b1!8m2!3d40.8153561!4d72.28375!16zL20vMDJwNDA5!3m5!1s0x38bcecb202075c03:0x8b2da46bef7801fa!8m2!3d40.7743791!4d72.3377657!16s%2Fg%2F1q5bw9qsv?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                          width="1320"
                          height="500"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}