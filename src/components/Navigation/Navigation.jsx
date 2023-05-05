import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import CartTooltip from "./CartTooltip/CartTooltip";
import Categories from "./Categories/Categories";
import SearchBar from "./SearchBar/SearchBar";

import "../Btn.css";

const Navigation = (props) => {
 
  const navigate = useNavigate();
  const goToMyCart = () => {
    navigate("./yourcart");
  };

  const Login = () =>{
    navigate("./login");
  };
  const goToProfile = () =>{
    navigate("./Profile");
  };
  const goToAccountSettings = () =>{
    navigate("./Account");
  };

  const goToMyWishList= () => {
    navigate("./wishList");
  };
  const goToMyLearning =() =>{
    navigate("./Learning");
  }

  
  const LeftTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      minWidth: 830,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 , gap:"1%"}} >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#27599b",
          
          height: "10rem",
          px: "2.4rem",
          boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        }}

        
      >
      <Toolbar disableGutters sx={{ my: "auto", gap: "1.5%" }}>
          <Box>
            <img
            src="/images/header/skillhubLogo2.jpeg"
              // src="/images/header/skillhubLogo.png"
              alt="Udemy"
              width="120"
              height= "150"
            />
          </Box>
          <MenuButtom>
            <LeftTooltipWithStyle
              title={<Categories />}
              placement="bottom-start"
            >
              <span style={{ color: "white" , "font-size":"18px"}}>Categories</span>
            </LeftTooltipWithStyle>
          </MenuButtom>

          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>

          <label onClick={() => goToMyLearning()} style={{"font-size" : "18px"}}>
            <span style={{ color: "white" }}>Enrolled Courses</span>
          </label>
          <span style={{"font-size" : "24px"}} onClick={() => goToMyWishList()}>
            <FontAwesomeIcon icon={regularHeart} />
          </span>
         
          <MenuButtom>
            <ShoppingCartOutlinedIcon
                sx={{ fontSize: 28, color: "white" }}
                onClick={() => goToMyCart()}
              />
          </MenuButtom>
          {props.isLoggedIn ? ( // render Profile button if logged in
          <>
            <div
              className="LinkButton"
              style={{
                "--height": "4rem",
                "--width": "8rem",
                "--font-size": "1.4rem",
              }}
              onClick={()=>goToProfile()}
              >
              Profile
            </div>
            <div
              className="LinkButton"
              style={{
                "--height": "4rem",
                "--width": "8rem",
                "--font-size": "1.4rem",
              }}
              onClick={()=> goToAccountSettings()}
              >
              Account
            </div>
            
              </>
          ) : (
            // render Log in and Sign up buttons if not logged in
            <>
              <div
                className="LinkButton"
                style={{
                  "--height": "6rem",
                  "--width": "11rem",
                  "--font-size": "1.8rem",
                  "border-radius" : "8px",
                  "border": "none",
                }}
                onClick={()=>Login()}
              >
                Log in
              </div>
              <div
                className="LinkButton"
                style={{
                  "--height": "6rem",
                  "--width": "11rem",
                  "--font-size": "1.8rem",
                  "border-radius" : "8px",
                  "border": "none",
                }}
              >
                Sign up
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
