import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow 
} from '@material-ui/core';
import { formatDate } from '../../utils/dataFormatter';

const columns = [
  { id: 'name', label: 'Full Name', minWidth: 200 },
  { id: 'email', label: 'Email Address', minWidth: 200 },
  { 
    id: 'birthdate', 
    label: 'Birthdate', 
    minWidth: 200,
    format: value => formatDate(value)
  },
  { id: 'cpf', label: 'Individual Registry (CPF)', minWidth: 200 }
];


export default class RegistrationsTable extends Component {

  state = {
    registers: [{}],
    page: 0,
    rowsPerPage: 5
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: +event.target.value,
      page: 0
    });
  };


  componentDidMount() {
    const url = new URL("http://localhost:3333/users");
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(resData => {
        this.setState({
          registers: resData
        })
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    const { registers, page, rowsPerPage } = this.state;
    return (
      <>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                registers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(register => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={register.id}>
                      {
                        columns.map(column => {
                          const value = register[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format ? column.format(value) : value}
                            </TableCell>
                          );
                        })}

                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={registers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </>
    );
  }
}
