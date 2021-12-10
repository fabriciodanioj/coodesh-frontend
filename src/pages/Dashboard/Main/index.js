import React from 'react';

import { Button, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

import Card from '~/components/Card';
import LoadingModal from '~/components/LoadingModal';
import api from '~/services/api';

import { Header, Container } from './styles';

const useStyles = makeStyles({
  header: {
    marginBottom: '50px',
  },
  input: {
    width: '100%',
  },

  select: {
    width: '100%',
  },
  icon: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
});

function Main({ history }) {
  const classes = useStyles();

  const loadingRef = React.useRef(null);

  const [filter, setFilter] = React.useState('');
  const [order, setOrder] = React.useState('desc');

  const [articles, setArticles] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    perPage: 10,
    total: 0,
    totalPages: 1,
  });

  const getArticles = async ({ page, perPage, onlySum }) => {
    if (loadingRef.current) {
      loadingRef.current.open();
    }

    try {
      const { data: response } = await api.get('/article', {
        params: {
          page,
          perPage,
          filter,
          order,
        },
      });

      const { data, pagination: paginate } = response;

      setPagination({
        page: paginate.page,
        perPage: paginate.perPage,
        total: paginate.total,
        totalPages: paginate.totalPages,
      });

      if (onlySum) {
        setArticles([...articles, ...data]);
      } else {
        setArticles(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (loadingRef.current) {
        loadingRef.current.close();
      }
    }
  };

  React.useEffect(() => {
    getArticles({ page: 1, perPage: 10, onlySum: false });
  }, [filter, order]);

  return (
    <>
      <Container>
        <Grid
          container
          md={8}
          xs={12}
          align="center"
          spacing={4}
          className={classes.header}
        >
          <Grid item xs={12}>
            <Header.Image src="https://coodesh.com/images/svg/logos/logo.svg" />
          </Grid>
          <Grid item xs={12}>
            <Header.Title>
              Space Flight News <span>by Coodesh</span>
            </Header.Title>
          </Grid>

          <Grid item md={10} xs={12}>
            <TextField
              id="standard-basic"
              className={classes.input}
              label="Search by an article"
              value={filter}
              onChange={(event) => {
                setFilter(event.target.value);
              }}
            />
          </Grid>

          <Grid item md={2} xs={12}>
            <TextField
              labelId="select-sort-label"
              id="select-sort"
              select
              label="Sort by..."
              className={classes.select}
              value={order}
              onChange={(event) => {
                setOrder(event.target.value);
              }}
            >
              <MenuItem value="desc">Newest</MenuItem>
              <MenuItem value="asc">Oldest</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={8}>
          {articles.length > 0 ? (
            articles.map((el, index) => (
              <Card
                isPair={index % 2 === 0}
                reload={() =>
                  getArticles({ page: 1, perPage: 10, onlySum: false })
                }
                article={{
                  title: el.title,
                  imageUrl: el.imageUrl,
                  summary: el.summary,
                  newsSite: el.newsSite,
                  url: el.url,
                  id: el._id,
                  publishedAt: el.publishedAt,
                }}
              />
            ))
          ) : (
            <Typography>Nada encontrado</Typography>
          )}
        </Grid>

        {articles.length > 0 && (
          <Grid item xs={12} alignItems="center">
            <Button
              variant="contained"
              onClick={() =>
                getArticles({
                  page: pagination.page + 1,
                  perPage: 10,
                  onlySum: true,
                })
              }
            >
              Load more articles
            </Button>
          </Grid>
        )}
        <Fab
          color="primary"
          aria-label="add"
          className={classes.icon}
          onClick={() => history.push('article')}
        >
          <AddIcon />
        </Fab>
      </Container>
      <LoadingModal ref={loadingRef} />
    </>
  );
}

export default Main;
