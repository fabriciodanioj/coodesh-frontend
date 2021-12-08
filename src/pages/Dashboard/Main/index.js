import React from 'react';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { Container, Header } from './styles';

function Main() {
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('');

  return (
    <Container>
      <Header.Container>
        <Header.Image src="https://coodesh.com/images/svg/logos/logo.svg" />
        <Header.Title>
          Space Flight News <span>by Coodesh</span>
        </Header.Title>
        <Header.Box>
          <Input
            id="outlined-name"
            label="Name"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Header.Box>
      </Header.Container>
    </Container>
  );
}

export default Main;
