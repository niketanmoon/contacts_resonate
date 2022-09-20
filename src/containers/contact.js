import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/contact.css";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (e) {
        console.log(e);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    const searchWord = event.target.value;
    const newFilter =
      users &&
      users.filter(
        (value) =>
          value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.email.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.username.toLowerCase().includes(searchWord.toLowerCase())
      );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <FormGroup>
            <TextField
              label="Browse contacts by name, username or email"
              value={search}
              onChange={handleSearch}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}></Grid>
        {search.length !== 0
          ? filteredData &&
            filteredData.map((element) => {
              return (
                <Grid item xs={12} sm={3} key={element.id}>
                  <Link to={`/${element.id}`} className="contact__card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: "#34474d" }}
                            aria-label="recipe"
                          >
                            {element.name.split(" ").shift().charAt(0) +
                              element.name.split(" ").pop().charAt(0)}
                          </Avatar>
                        }
                        title={element.name}
                        subheader={element.username}
                      />
                      <Divider />
                      <CardContent>
                        <Typography
                          sx={{ display: "flex", fontSize: "0.8rem" }}
                        >
                          <EmailIcon
                            className="contact__icon"
                            sx={{
                              marginRight: "10px",
                              fontSize: "20px !important",
                            }}
                          />
                          {element.email}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{ display: "flex", fontSize: "0.8rem" }}
                        >
                          <PhoneIcon className="contact__icon" />
                          {element.phone}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              );
            })
          : users &&
            users.map((element) => {
              return (
                <Grid item xs={12} sm={3} key={element.id}>
                  <Link to={`/${element.id}`} className="contact__card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: "#34474d" }}
                            aria-label="recipe"
                          >
                            {element.name.split(" ").shift().charAt(0) +
                              element.name.split(" ").pop().charAt(0)}
                          </Avatar>
                        }
                        title={element.name}
                        subheader={element.username}
                      />
                      <Divider />
                      <CardContent>
                        <Typography
                          sx={{ display: "flex", fontSize: "0.8rem" }}
                        >
                          <EmailIcon className="contact__icon" />
                          {element.email}
                        </Typography>

                        <Typography
                          sx={{ display: "flex", fontSize: "0.8rem" }}
                        >
                          <PhoneIcon className="contact__icon" />
                          {element.phone}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

export default Contact;
