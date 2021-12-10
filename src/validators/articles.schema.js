import yup from '~/libs/yup';

export const createArticleSchema = yup.object().shape({
  featured: yup.boolean().label('Featured'),
  title: yup.string().required().label('Title'),
  url: yup.string().required().label('News URL'),
  imageUrl: yup.string().required().label('Image URL'),
  newsSite: yup.string().required().label('Official site'),
  summary: yup.string().label('Summary'),
  publishedAt: yup.string().required().label('Published At'),
  launches: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
  events: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
});

export const createEventsAndLaunches = yup.object().shape({
  id: yup.string().required(),
  provider: yup.string(),
});

export const updateArticleSchema = yup.object().shape({
  featured: yup.boolean().label('Featured'),
  title: yup.string().label('Title'),
  url: yup.string().label('News URL'),
  imageUrl: yup.string().label('Image URL'),
  newsSite: yup.string().label('Official site'),
  summary: yup.string().label('Summary'),
  publishedAt: yup.string().label('Published At'),
  launches: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
  events: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
});
