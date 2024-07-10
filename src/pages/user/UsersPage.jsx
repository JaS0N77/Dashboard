import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const users = [
    {
        id: 1,
        userName: "admin",
        email: "admin@dash.com",
        role: "admin",
        name: "admin",
        surname: "admin",
    },
    {
        id: 2,
        userName: "user1",
        email: "user1@dash.com",
        role: "user",
        name: "userName1",
        surname: "userSurname1",
    },
    {
        id: 3,
        userName: "user2",
        email: "user2@dash.com",
        role: "user",
        name: "userName2",
        surname: "userSurname2",
    },
    {
        id: 4,
        userName: "user3",
        email: "user3@dash.com",
        role: "user",
        name: "userName3",
        surname: "userSurname3",
    },
    {
        id: 5,
        userName: "user4",
        email: "user4@dash.com",
        role: "user",
        name: "userName4",
        surname: "userSurname4",
    },
    {
        id: 6,
        userName: "user5",
        email: "user5@dash.com",
        role: "user",
        name: "userName5",
        surname: "userSurname5",
    },
];

const UsersPage = () => {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            Id
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            User name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            Email
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            Role
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            Full name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                            Edit
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">
                                {item.userName}
                            </TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center">{item.role}</TableCell>
                            <TableCell align="center">{`${item.name} ${item.surname}`}</TableCell>
                            <TableCell align="center">
                                {/* <Link to={`createuser/${item.id}`}>
                                        <EditIcon />
                                    </Link> */}
                                <Link
                                    to={`createuser?userId=${item.id}&email=${item.email}`}
                                >
                                    <EditIcon />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersPage;
