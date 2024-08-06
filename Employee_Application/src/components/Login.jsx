import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosinterceptor";

const Image =
  "https://images.pexels.com/photos/5950164/pexels-photo-5950164.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

export default function Login() {
  const [employee, setEmployee] = useState({
    username: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", employee);
    //   alert("Login Successful!");
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(employee));
        console.log('login succes')
        navigate("/employeemain");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        gap: 2,
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          borderRadius: 1,
          backgroundColor: "rgba(240, 242, 245, 0.85)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "25%",
            height: "70%",
            boxShadow: 8,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <Box sx={{ width: "80%" }}>
              <Typography variant="h4" gutterBottom textAlign={"center"}>
                Login
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  value={employee.username}
                  onChange={handleChange}
                  variant="filled"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={employee.password}
                  onChange={handleChange}
                  variant="filled"
                  fullWidth
                  margin="normal"
                />
                <FormControl
                  variant="filled"
                  fullWidth
                  margin="normal"
                  required
                >
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    sx={{
                      textAlign: "left",
                    }}
                    value={employee.role}
                    onChange={handleChange}
                  >
                    <MenuItem value="admin" alignItems="left">
                      Admin
                    </MenuItem>
                    <MenuItem value="employee" alignItems="left">
                      Employee
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3, mb: 2, py: 1.5, fontSize: "1rem" }}
                >
                  Login
                </Button>

                <Typography
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/signup"
                  variant="body2"
                  color="primary"
                  text-decoration="none"
                >
                  Doesn't have an account? Sign Up
                </Typography>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
