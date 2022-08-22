import React from "react";
import "antd/dist/antd.min.css";
import { HashLink } from "react-router-hash-link";
import ResponsiveAppBar from "./Navbar";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import DoubleArrow from "@mui/icons-material/KeyboardDoubleArrowUp";
import Button from "@mui/material/Button";
import ExploreIcon from "@mui/icons-material/Explore";

const Cover = () => {
  return (
    <>
      <div
        id="sec1"
        style={{
          backgroundImage: "url(/assets/bg_man_yoga1.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ResponsiveAppBar />
        <div
          className="heading"
          style={{ marginTop: "120px", fontSize: "10vh" }}
        >
          <p style={{ color: "white", fontFamily: "integral" }}>
            Friends <br></br>of <br></br>
            <span style={{ fontFamily: "yoga", color: "red" }}>M</span>editation
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HashLink to="#section2" onDurationChange={1000} smooth>
            <ExpandMoreOutlinedIcon
              sx={{
                marginTop: 15,
                color: "white",
                display: "flex",
                justifyContent: "center",
                fontSize: 70,
              }}
            />
          </HashLink>
        </div>
      </div>

      <div id="section2">
        <div
          style={{
            backgroundImage: "url(/assets/chairYoga.jpg ) ",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="heading"
            style={{
              paddingTop: "21vh",
              paddingRight: "14vw",
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "13vh",
            }}
          >
            <p
              style={{ color: "white", fontSize: "1em", fontFamily: "priest" }}
            >
              {" "}
              Innovation <br></br>For <br></br>Relaxation
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <HashLink to="#section" onDurationChange={1000} smooth>
              <ExpandMoreOutlinedIcon
                sx={{
                  marginTop: "-2vh",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: 70,
                }}
              />
            </HashLink>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}

      <div
        style={{
          overflow: "hidden",
          backgroundImage: "url(/assets/bg_man_yoga.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        id="section"
      >
        <div>
          <div
            style={{
              paddingTop: "30vh",
              color: "white",
              fontSize: "5.5em",
              display: "flex",
              justifyContent: "center",
              fontFamily: "anti",
            }}
          >
            <p>
              "Yoga is the journey of the self, through the self, to the self."
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Button
              style={{
                fontFamily: "roboto ",
                borderRadius: 5,
                backgroundColor: "black",
                opacity: "0.8",
                padding: "10px 20px",
                fontSize: "15px",
              }}
              variant="contained"
              color="secondary"
              endIcon={<ExploreIcon />}
            >
              Start Journey
            </Button>
          </div>
        </div>
        <div
          style={{
            marginTop: "37vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HashLink to="#sec1" smooth>
            {" "}
            <DoubleArrow style={{ fontSize: "5em", color: "white" }} />
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Cover;
