import React from 'react';

import { Button, Card, Grid, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router-dom';

import Form from '~/components/Form';
import Input from '~/components/Input';
import DatePicker from '~/components/Input/DatePicker';
import Textarea from '~/components/Input/Textarea';
import LoadingModal from '~/components/LoadingModal';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import {
  createArticleSchema,
  createEventsAndLaunches,
  updateArticleSchema,
} from '~/validators/articles.schema';

import { Container } from './styles';

const useStyles = makeStyles({
  card: {
    position: 'relative',
  },

  cardIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

function Manage({ history }) {
  const { id: articleId } = useParams();
  const toast = useToast();

  const classes = useStyles();

  const formRef = React.useRef(null);

  const loadingRef = React.useRef(null);

  const [defaultData, setDefaultData] = React.useState({});
  const [events, setEvents] = React.useState([]);
  const [launches, setLaunches] = React.useState([]);

  const getArticle = async () => {
    try {
      const response = await api.get(`article/${articleId}`);

      setDefaultData(response.data);
      setEvents(response.data.events);
      setLaunches(response.data.launches);
    } catch (error) {}
  };

  const handleSubmit = async (formData) => {
    if (loadingRef.current) {
      loadingRef.current.open();
    }

    formData.launches = launches;

    formData.events = events;

    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        articleId ? updateArticleSchema : createArticleSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      if (articleId) {
        await api.put(`article/${articleId}`, data);
      } else {
        await api.post('article', data);
      }

      history.goBack();
      return toast.successToast('Atualização feita com sucesso.');
    } catch (error) {
      if (error.response) {
        toast.errorToast(
          'Erro ao atualizar suas informações, tente novamente.'
        );
      }
      return formRef.current.setErrors(error);
    } finally {
      if (loadingRef.current) {
        loadingRef.current.close();
      }
    }
  };

  const handleEvents = async () => {
    const eventId = formRef.current.getFieldValue('event.id');
    const eventProvider = formRef.current.getFieldValue('event.provider');

    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        createEventsAndLaunches,
        {
          id: eventId,
          provider: eventProvider,
        }
      );

      if (!success) {
        throw errors;
      }

      setEvents([...events, data]);

      const eventIdInput = formRef.current.getFieldRef('event.id');
      const eventProviderInput = formRef.current.getFieldRef('event.provider');

      eventIdInput.value = '';
      eventProviderInput.value = '';
    } catch (error) {
      formRef.current.setFieldError('event.id', 'ID is a required field');
    }
  };

  const handleLaunches = async () => {
    const launchId = formRef.current.getFieldValue('launch.id');
    const launchProvider = formRef.current.getFieldValue('launch.provider');

    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        createEventsAndLaunches,
        {
          id: launchId,
          provider: launchProvider,
        }
      );

      if (!success) {
        throw errors;
      }

      setLaunches([...launches, data]);

      const launchIdInput = formRef.current.getFieldRef('launch.id');
      const launchProviderInput =
        formRef.current.getFieldRef('launch.provider');

      launchIdInput.value = '';
      launchProviderInput.value = '';
    } catch (error) {
      formRef.current.setFieldError('launch.id', 'ID is a required field');
    }
  };

  React.useEffect(() => {
    if (articleId) {
      getArticle();
    }
  }, []);

  return (
    <>
      <Container>
        <Form
          title={articleId ? 'Edit article' : 'Create a new article'}
          initialData={defaultData}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12}>
              <Input name="title" label="Title" />
            </Grid>
            <Grid item xs={12}>
              <Textarea name="summary" label="Summary" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="url" label="News URL" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="imageUrl" label="Image URL" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="newsSite" label="Official site" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <DatePicker name="publishedAt" label="Published At" />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Typography>Events</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="event.id" label="ID" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="event.provider" label="Provider" />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                type="button"
                onClick={handleEvents}
              >
                Add event
              </Button>
            </Grid>
            {events.map((ev) => (
              <Grid item xs={4}>
                <Card padding={2} className={classes.card}>
                  <CardContent>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Typography>ID: {ev.id}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Provider: {ev.provider}</Typography>
                      </Grid>
                    </Grid>
                    <IconButton
                      aria-label="delete"
                      className={classes.cardIcon}
                      onClick={() =>
                        events.length === 1
                          ? setEvents([])
                          : setEvents(events.filter((e) => e.id !== ev.id))
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Typography>Launches</Typography>
            </Grid>

            <Grid />
            <Grid item sm={6} xs={12}>
              <Input name="launch.id" label="ID" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input name="launch.provider" label="Provider" />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                type="button"
                onClick={handleLaunches}
              >
                Add launch
              </Button>
            </Grid>

            {launches.map((launch) => (
              <Grid item xs={4}>
                <Card padding={2} className={classes.card}>
                  <CardContent>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Typography>ID: {launch.id}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Provider: {launch.provider}</Typography>
                      </Grid>
                    </Grid>
                    <IconButton
                      aria-label="delete"
                      className={classes.cardIcon}
                      onClick={() =>
                        launches.length === 1
                          ? setLaunches([])
                          : setLaunches(
                              launches.filter((l) => l.id !== launch.id)
                            )
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}

            <Grid item xs={12} />
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Container>
      <LoadingModal ref={loadingRef} />
    </>
  );
}

export default Manage;
