import React, { useEffect, useState } from "react";
import axios from "axios";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import {
    Container,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableBody,
    Table,
    LinearProgress,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 21,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const apiUrl = "https://thronesapi.com/api/v2/Characters";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    // then catch
    // useEffect(() => {
    //     axios.get(apiUrl)
    //     .then((response) => {
    //         const { data } = response;
    //         setCharacters(data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    // async await
    useEffect(() => {
        const charactersRequest = async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiUrl);
                const { data } = response;
                setCharacters(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        charactersRequest();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell
                            align="center"
                            style={{ width: "10%" }}
                        >
                            Id
                        </StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Family</StyledTableCell>
                        <StyledTableCell
                            style={{ width: "25%" }}
                            align="center"
                        >
                            Image
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!loading &&
                        characters.map((character) => (
                            <StyledTableRow key={character.id}>
                                <StyledTableCell
                                    align="center"
                                    component="th"
                                    scope="row"
                                >
                                    {character.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {character.fullName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {character.family}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <img
                                        width={100}
                                        src={character.imageUrl}
                                        alt="img"
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
            {loading && <LinearProgress sx={{ mt: 2 }} />}
        </TableContainer>
    );
};

export default CharactersPage;
