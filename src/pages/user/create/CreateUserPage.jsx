import React from "react";
import { Container } from "@mui/material";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const CreateUserPage = () => {
    // якщо передали через createuser/:userId
    // const { userId } = useParams();
    // console.log("Id: ", userId)

    const query = useQuery();
    const user = {
        id: query.get("userId"),
        email: query.get("email"),
    };

    const rowStyle = {
        mt: 1,
    };

    const onSubmitHandler = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: user.email,
            role: "user",
            name: "",
            surname: "",
        },
        onSubmit: onSubmitHandler,
    });

    return (
        <form style={{textAlign: "center"}} onSubmit={formik.handleSubmit}>
            <Box sx={rowStyle}>
                <label htmlFor="userName">Username</label>
                <input
                    id="userName"
                    name="userName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                />
            </Box>

            <Box sx={rowStyle}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </Box>

            <Box sx={rowStyle}>
                <label htmlFor="role">Role</label>
                <input
                    id="role"
                    name="role"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.role}
                />
            </Box>
            <Box sx={rowStyle}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </Box>
            <Box sx={rowStyle}>
                <label htmlFor="surname">Surname</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                />
            </Box>
            <Box sx={rowStyle}>
                <button type="submit">Submit</button>
            </Box>
        </form>
    );
};

export default CreateUserPage;
