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
import { Link, useSearchParams } from "react-router-dom";

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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Categories = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("categary");
  return (
    <Box>
      <StyledLink to={`/create?category-${category || ""}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </StyledLink>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to="/">All Categories</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <StyledLink to={`/?category-${category.type}`}>{category.type}</StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default Categories;
