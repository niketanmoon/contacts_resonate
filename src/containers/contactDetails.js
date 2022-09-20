import {
  Card,
  CardContent,
  CardHeader,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (e) {
        console.log(e);
        setUser([]);
      }
    };

    fetchUser();
  }, [id]);
  return (
    user &&
    user.address && (
      <Card sx={{ padding: "10px", margin: "10px" }}>
        <CardHeader title="Contact Details" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Name"
                              value={user.name}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Username"
                              value={user.username}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Website URL"
                              value={user.website}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Email Id"
                              value={user.email}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Phone Number"
                              value={user.phone}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Street Address"
                              value={`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Zip Code"
                              value={user.address.zipcode}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Company"
                              value={user.company.name}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Company's Catch Phrase"
                              value={user.company.catchPhrase}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <TextField
                              id="outlined-read-only-input"
                              label="Company's Business Services"
                              value={user.company.bs}
                              InputProps={{
                                readOnly: true,
                              }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  );
};

export default ContactDetails;
