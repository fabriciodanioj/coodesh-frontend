/* eslint-disable react/prop-types */
import React from 'react';

import { Button, Grid } from '@material-ui/core';

import { Container, Content } from './styles';
import useWindowSize from '~/hooks/useWindowSize';

const Photo = ({ url }) => (
  <Grid item container md={5} xs={12}>
    <Content.Image src={url} />
  </Grid>
);

const Card = ({
  isPair = false,
  article: { title, imageUrl, summary, newsSite, url, id },
}) => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Grid container direction="row" spacing={2}>
        {((width > 950 && !isPair) || width < 950) && <Photo url={imageUrl} />}

        <Grid item container md={7} spacing={2}>
          <Grid item xs={12}>
            <Content.Title>{title}</Content.Title>
          </Grid>
          <Grid item xs={6}>
            <Content.Date>22/03/1983</Content.Date>
          </Grid>
          <Grid item xs={6} justifyContent="flex-end">
            <Content.Link>{newsSite}</Content.Link>
          </Grid>
          <Grid item xs={12}>
            <Content.Description>{summary}</Content.Description>
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant="primary" href={url} target="_blank">
              Show more
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth>
              Editar
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="secondary" fullWidth>
              Excluir
            </Button>
          </Grid>
        </Grid>

        {isPair && width >= 950 && <Photo url={imageUrl} />}
      </Grid>
    </Container>
  );
};

export default Card;
