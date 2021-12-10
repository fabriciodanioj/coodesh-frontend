/* eslint-disable react/prop-types */
import React from 'react';

import { Button, Grid } from '@material-ui/core';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';

import ModalDelete from '~/components/Modals/ModalDelete';
import useWindowSize from '~/hooks/useWindowSize';

import { Container, Content } from './styles';
import api from '~/services/api';

const Photo = ({ url }) => (
  <Grid item container md={5} xs={12}>
    <Content.Image src={url} />
  </Grid>
);

const Card = ({
  isPair = false,
  article: { title, imageUrl, summary, newsSite, url, publishedAt, id },
  reload,
}) => {
  const { width } = useWindowSize();
  const deleteRef = React.useRef(null);

  const history = useHistory();

  const deleteArticle = async (article) => {
    try {
      await api.delete(`article/${article}`);

      deleteRef.current.close();

      reload();
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <Grid container direction="row" spacing={2}>
          {((width > 950 && !isPair) || width < 950) && (
            <Photo url={imageUrl} />
          )}

          <Grid item container md={7} spacing={2}>
            <Grid item xs={12}>
              <Content.Title>{title}</Content.Title>
            </Grid>
            <Grid item xs={6}>
              <Content.Date>
                {format(new Date(publishedAt), 'dd/MM/yyyy')}
              </Content.Date>
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
              <Button
                variant="contained"
                fullWidth
                onClick={() => history.push(`article/${id}`)}
              >
                Editar
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={() => deleteRef.current.open(id)}
              >
                Excluir
              </Button>
            </Grid>
          </Grid>

          {isPair && width >= 950 && <Photo url={imageUrl} />}
        </Grid>
      </Container>
      <ModalDelete
        ref={deleteRef}
        title="Want you delete this article?"
        onSubmit={deleteArticle}
      />
    </>
  );
};

export default Card;
