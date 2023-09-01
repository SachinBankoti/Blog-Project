import {
  Box,
  Button,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import React from "react";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
  text-decoration: none;
`;
const Categories = () => {
  return (
    <Box>
      <Link to="./create" style={{ textDecoration: "none" }}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => {
            return (
              <TableRow>
                <TableCell key={category.id}>{category.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default Categories;
